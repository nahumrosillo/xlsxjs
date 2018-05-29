"use strict";
const XLSX = require('xlsx');
const fs = require('fs');
const pify = require('pify');
const getColumn = require('../../services/gets').getColumn;
const getRow = require('../../services/gets').getRow;


const getFirstRow = function(nameExcel, nameSheet) {
    var file = XLSX.readFile(nameExcel);
    var page1 = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[nameSheet]], {header:1, raw:true});
    return page1[0];
};
module.exports.getFirstRow = getFirstRow;

async function getData(excel_path, sheet, column) {
    //Crea una promesa en la variable miPromesa
    const promisingGetColumn = pify(getColumn); //Crea una promesa y controla el callback.

    var miPromesa = promisingGetColumn(excel_path, sheet, column);
    const myColumn = await miPromesa; //await espera por la promesa y obtiene el valor

    if (myColumn.column[0] === undefined)
        console.log("No hay valores");
    else
        return myColumn.column;
}

const addRow = function(container, row) {
    container.push(row);
}
module.exports.addRow = addRow;

const addColumn = function(container, header, column) {

    if (container.length == 0) {
        container.push(header);

        for (var i = 0; i < column.length; i++) {
            var data = [];
            data.push(column[i]);

            container.push(data);
        }
    }
    else {
        
        container[0].push(header[0]);

        for (var i = 0; i < (container.length-1); i++) {
            var data = container[i+1];


            data.push(column[i]);

            container[i+1] = data;
        }

        console.log(container);
    }
};
module.exports.addColumn = addColumn;
