const argv = require('./config/yargs').argv;
const colors = require('colors');

const { createFile, listarTabla } = require('./opMatematicas/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then((result) => {
            console.log('====================='.green);
            console.log(`Table del ${argv.base}`.green);
            console.log('====================='.green);
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':
        createFile(argv.base, argv.limite).then((result) => {
            console.log(`Archivo creado ${result.green}`);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconicido');
        break;
}

//console.log(argv);
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log('Limite', argv.limite);


//video 30