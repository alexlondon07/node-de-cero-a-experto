let deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneración',
    getName: function(){
        return `${this.name} ${this.lastname} - poder: ${this.power}`;
    }
}

//console.log(deadpool.getName());
let { name: firstName, lastname, power } = deadpool;
console.log(firstName, lastname, power); 