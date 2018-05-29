"use strict";
const XLSX = require('xlsx');
const fs = require('fs');

const getColumn = async function(path, nameSheet, nameColumn, callback){

    try {
        const workbook = XLSX.readFile(path);

        const json = XLSX.utils.sheet_to_json(workbook.Sheets[nameSheet]);

        let column = new Array();

        json.forEach(value => {
                if (value[nameColumn] != undefined)
                    column.push(value[nameColumn])
            }
        );
        callback(null, {column});
    }
    catch(e) {
        callback('El fichero o la hoja del fichero no existe, por favor tenga en cuenta las mayúsculas', null);
    }
}
module.exports.getColumn = getColumn;

const getRow = async function(path, nameSheet, nameColumn, valueColumn, callback){

    try {
        const workbook = XLSX.readFile(path);
        const json = XLSX.utils.sheet_to_json(workbook.Sheets[nameSheet]);

        let row = json.filter(value => {
            return value[nameColumn] === valueColumn;
        });

        callback(null, {row});
    }
    catch(e) {
        callback('El fichero o la hoja del fichero no existe, por favor tenga en cuenta las mayúsculas', null);
    }

};
module.exports.getRow = getRow;

const getAll = async function(path, nameSheet, callback){

    try {
        const workbook = XLSX.readFile(path);
        const all = XLSX.utils.sheet_to_json(workbook.Sheets[nameSheet]);

        callback(null, all);
    }
    catch(e) {
        callback('El fichero o la hoja del fichero no existe, por favor tenga en cuenta las mayúsculas', null);
    }

};
module.exports.getAll = getAll;