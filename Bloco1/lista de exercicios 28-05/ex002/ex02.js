const leia = require('readline-sync');

let idade = 1;
let menor21 = 0;
let maior50 = 0;

while (idade > 0){
    idade = leia.questionInt('Digite uma idade: ');
    if (idade < 21 && idade > 0){
        menor21 = menor21 + 1;
    }
    if (idade > 50){
        maior50 = maior50 + 1;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);