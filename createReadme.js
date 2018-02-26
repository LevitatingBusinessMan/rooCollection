//Requires FS-EXTRA !
const fs = require('fs-extra');
const repo = "https://github.com/Gamerein/rooCollection/tree/master/roo's/";
const filename = 'README.md';

fs.readdir("./roo's").then(roos => {
	console.log('Found ' + roos.length + ' roos!');
	let file = "Reins | Roo | Collection \n" + "--- | --- | --- \n";
	let refs = '';
	let pos = 1;
	roos.forEach(rooFile => {
		let url = repo + rooFile + '?raw=true';
		let roo = rooFile.split('.')[0];
		file += '![' + roo + '][' + roo + ']' + (pos == 3 ? '\n' : ' |');
		//refs += '[' + roo + ']: ' + url + '\n';
		refs += '[' + roo + ']: roo\'s/' + rooFile + '\n';
		if (pos != 3) pos++;
		else pos = 1;
	});
	file += '\n\n\n' + refs
	fs.writeFile(filename, file, (err) => {
		if (err) throw err;
		if (file.includes('undefined')) console.log('ERR: Undefined found in file!');
		console.log("File made");
}); 
});