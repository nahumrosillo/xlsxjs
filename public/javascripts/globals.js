var filewatcher = require('filewatcher');
var watcher = filewatcher();
var XLSX = require('xlsx');


excelWatcher =  function(excels) {

	for (var i = 0; i < excels.length; i++) {
		console.log(now() + ' Detectado: excels/' + excels[i]);
		watcher.add('excels/' + excels[i]);
	}

	watcher.on('change', function(file, stat) {
		console.log(now() + ' Fichero modificado: %s', file);
		if (!stat) console.log(now() + ' Fichero borrado');
	});
}

now = function(){
	var date = new Date();
	return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}