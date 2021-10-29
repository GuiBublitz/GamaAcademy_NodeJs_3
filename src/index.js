// //Biblioteca
// const rl = require('./interface/index');

// rl.question('Are you enjoying the OOP class?', answer =>{
//     console.log(`Did you answer that? : ${answer}`);
//     rl.close();
// });
const options = require('./data/index');
const MachineOptions = require('./controller/class/index');

let random = new MachineOptions({ opt: options }).sort();

console.log(random);