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
        let list = todo.getListTodo();
        console.log('================ Tasks to do ================'.blue);
        for (let  task of list) {
            console.log( task.description );  
            console.log( 'Competed: ', task.completed );  
            console.log('========================================='.blue);
        }
        break;
    case 'update':
        console.log('Update task to do');
        break;

    default:
    console.log('Command no found');
}