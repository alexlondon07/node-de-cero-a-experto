const argv = require('yargs')
        .command('create', 'Create element to do',{
            description: {
                demand: true,
                alias: 'd',
                desc: 'Description command to create element'
            }
        })  
        .command('update', 'Update element to do',{
            description: {
                demand: true,
                alias: 'd',
                desc: 'Description command to update element'
            },
            completed: {
                default: true,
                alias: 'c',
                desc: ''
            }
        })
        .help()
        .argv;

module.exports = {
    argv
}