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

const update = ( description, completed = true) => {
    loadDB();
    let index = listTodo.findIndex ( task => task.description === description );
    if( index >= 0){
        listTodo[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const remove = ( description) => {
    loadDB();
    let newListTodo = listTodo.filter ( task => {
        return task.description !== description;
    });
    if( listTodo.length === newListTodo ){
        return false;
    }else{
        listTodo = newListTodo;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    saveDB,
    getListTodo,
    update,
    remove
}