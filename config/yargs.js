const opts = {
    base: {
        demand: true,
        alias: ''
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea las tablas de multiplicar en un archivo txt', opts)
    .help().argv;

module.exports = {
    argv
}