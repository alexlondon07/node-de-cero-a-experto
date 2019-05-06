//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo  = require('./todo/todo');


let command = argv._[0];

switch ( command ){
    case 'create':
        let task = todo.create( argv.description );
        console.log( task );
        break;
    case 'list':
        console.log('Show all tasks to do');
        break;
    case 'update':
        console.log('Update task to do');
        break;

    default:
    console.log('Command no found');
}