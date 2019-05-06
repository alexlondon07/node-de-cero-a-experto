const fs = require('fs');

let listTodo = [];

const create = ( description ) => {

    loadDB();

    let todo = {
        description,
        completed: false
    }

    listTodo.push( todo );
    saveDB();
    return listTodo;
}

const getListTodo = () => {
    loadDB();
    return listTodo;
}

const saveDB = () => {
    let data = JSON.stringify( listTodo );

    fs.writeFile ( 'db/data.json', data, ( err ) => {
        if ( err ) throw new Error('Item could not be saved')
    }); 
}

const loadDB = () => {
    try {
        listTodo = require('../db/data.json');
    } catch (error) {
        listTodo = [];
    }
}

module.exports = {
    create,
    saveDB,
    getListTodo
}