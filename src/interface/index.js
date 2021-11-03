//Arquivo inativo( Usamos o inquirer como interface )
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = rl;