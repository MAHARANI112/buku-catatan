const validator = require('validator');
const ambilCatatan = require('./catatan.js');
const pesan = ambilCatatan();

console.log(pesan);
console.log(validator.isURL('https://proska.com'));
const chalk = require('chalk');
console.log(chalk.blue('sukses'));
