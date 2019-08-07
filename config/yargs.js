const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Decripcion de la tarea por hacer'
};


const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {descripcion})
    .command('actualizar', 'actualiza el estado completado de una tarea', {descripcion, completado})
    .command('borrar', 'elimina una tarea', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}

