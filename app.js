// const amount = 12
// console.log("First node app!");
// if (amount<10){
//     console.log('small number');
// }else{
//     console.log("larger number");
// }
//Globals
// console.log(__filename);
// setInterval(() => {
//     console.log("Hello World");
// }, 2000);

//Modules

const naam = require('./temp');
// console.log(naam);

const sayHi =require('./modules');
const data =require('./export-as-u-go')

// console.log(data);

// sayHi(naam.sur);
// sayHi(naam.naam);
// sayHi('Kashyap')

// sayHi('Kashyap');
// sayHi(naam)
// sayHi(sur)

const add=require('./mine-grenade');
add(5,2)