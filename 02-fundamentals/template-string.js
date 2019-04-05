let name = 'Deadpool';
let real = 'Wade Winston';

console.log(name + ' ' + real);
console.log(`${name} ${real} `);
console.log('-----------------');

let nameFull = name + ' ' + real;
let nameTemplate = `${name} ${real}`;
console.log( nameFull === nameTemplate);


console.log('-----------------');
function getName(){
    return `${name} ${real} `;
}
console.log(`El nombre de : ${getName()}`)