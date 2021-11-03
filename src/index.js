// Biblioteca
// const rl = require('./interface/index');

// rl.question('Are you enjoying the OOP class?', answer =>{
//     console.log(`Did you answer that? : ${answer}`);
//     rl.close();
// });
// Substituimos o rl pelo inquirer, como vc pode ver no arquivo user.js 
const options = require('./data/index');
const User = require('./controller/class/user');


let jogar = new User({ opt: options }).game();
console.info(jogar);