const leia = require('readline-sync');

let nota1 = leia.questionFloat('Nota 1: ');
let nota2 = leia.questionFloat('Nota 2: ');
let nota3 = leia.questionFloat('Nota 3: ');
let nota4 = leia.questionFloat('Nota 4: ');
let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;
console.log('Media final: %f', mediaFinal.toFixed(1));