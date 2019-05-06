const description =  {
    demand: true,
    alias: 'd',
    desc: 'Description command to do'
}

const completed = {
    default: true,
    alias: 'c',
    desc: ''
}

const argv = require('yargs')
        .command('create', 'Create element to do',{
            description
        })  
        .command('update', 'Update element to do',{
            description,
            completed
        })
        .command('delete', 'Delete element to do',{
            description
        })
        .help()
        .argv;

module.exports = {
    argv
}