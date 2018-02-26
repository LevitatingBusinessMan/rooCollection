//Requires FS-EXTRA !
const fs = require('fs-extra');
const filename = 'README.md';

fs.readdir("./roo's").then(roos => {
	console.log('Found ' + roos.length + ' roos!');
	let file = "";
	
	let pos = 1;
	let first = true;
	let headerRow = '';
	let imagesRow = '';
	roos.forEach(rooFile => {
		let roo = rooFile.split('.')[0];
		headerRow += '**' + roo + '**' + (pos == 3 ? '\n' : ' |');
		imagesRow += '<img src="roo\'s/' + rooFile + '" width="128" height="128">' + (pos == 3 ? '\n' : ' |');
		if (pos != 3) pos++; 
		else {pos = 1; file += headerRow + (first ? '--- | --- | --- \n'  : '') + imagesRow; first = false; headerRow = ''; imagesRow = '';}
	});
	fs.writeFile(filename, file, (err) => {
		if (err) throw err;
		if (file.includes('undefined')) console.log('ERR: Undefined found in file!');
		console.log("File made");
}); 
});