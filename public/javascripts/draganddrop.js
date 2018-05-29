function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    let target = ev.target;
    indiceCelda = 0;

    if(ev.target.classList[0] === 'insertable') {
        target.appendChild(document.getElementById(data));
        console.log(target);

    }
    else {
        target = target.parentNode.parentNode.parentNode.parentNode.parentNode;
        ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(document.getElementById(data));
        console.log(target);
        indiceCelda = target.childElementCount-1;
    }

    const columnaIndice = target.cellIndex;
    const columnaNombre = target.parentNode.parentNode.childNodes[0].childNodes[columnaIndice].innerHTML;
    const filaTVChord = target.parentNode.childNodes[0].innerHTML;
    let ordenTarjeta = target.childNodes[indiceCelda].childNodes[0].childNodes[0].childNodes[0].childNodes[2].innerHTML;

    ordenTarjeta += "-" + target.childNodes[indiceCelda].childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerHTML;

    datas = {};

    datas.columnaNombre = columnaNombre;
    datas.filaTVChord = filaTVChord;
    datas.ordenTarjeta = ordenTarjeta;

    console.log(datas);

    actualizarTablon(datas);
}

function actualizarTablon(datas) {

    var datas = JSON.stringify(datas);
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "/tablon/actualizarTablon");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(datas);
}