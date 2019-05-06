//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch ( command ){
    case 'create':
        console.log('Create task to do');
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