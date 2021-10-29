// //Biblioteca
// const rl = require('./interface/index');

// rl.question('Are you enjoying the OOP class?', answer =>{
//     console.log(`Did you answer that? : ${answer}`);
//     rl.close();
// });
const options = require('./data/index');
const User = require('./controller/class/user');


let usuario = new User({ opt: options, name:'Guilherme', selected: 'Paper' }).game();

console.log(usuario);