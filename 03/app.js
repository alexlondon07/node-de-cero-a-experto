const fs = require('fs');
let colors = require('colors');

let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];
let data = '';
let file = `tables/table-${base}.txt`;

for (let i = 0; i <= 10; i++) {
    data +=`${base} * ${i} = ${base * i}\n`;   
}

fs.writeFile(file, data, (err) => {
    if(err) throw err;
    
    console.log(`The file ${file} has been saved!`.blue);
});