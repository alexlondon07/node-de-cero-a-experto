const fs = require('fs');

let listTodo = [];

const create = ( description ) => {

    let todo = {
        description,
        competed: false
    }

    listTodo.push( todo );
    saveDB();
    return listTodo;
}

const saveDB = () => {
    let data = JSON.stringify( listTodo );

    fs.writeFile ( 'db/data.json', data, ( err ) => {
        if ( err ) throw new Error('Item could not be saved')
    }); 
}

module.exports = {
    create,
    saveDB
}