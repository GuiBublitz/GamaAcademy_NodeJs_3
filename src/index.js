//Biblioteca
const rl = require('./interface/index');

rl.question('Are you enjoying the OOP class?', answer =>{
    console.log(`Did you answer that? : ${answer}`);
    rl.close();
});