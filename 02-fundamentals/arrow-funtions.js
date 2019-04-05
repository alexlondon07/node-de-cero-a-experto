// function sum(a, b){
//     return a+b;
// }

let sum = (a,b ) => a+b;
let hello = () => 'Hello Alex';
let greeting = (name) => `Hello ${ name }`;
let deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneración',
    getName() {
        return `${this.name} ${this.lastname} - poder: ${this.power}`;
    }
}

// console.log(sum(22,54));
// console.log(hello());
// console.log(greeting('Emi'));
console.log(deadpool.getName());

