const leia = require('readline-sync');

let soma = 0;
let vetorNum = [];

for (let i = 0; i < 10; i++){
    vetorNum[i] = leia.questionInt('Digite um numero: ');
    soma = soma + vetorNum[i];
}

console.log('Elementos nos índices impares: ');
for (let i = 1; i < 10; i+=2){
    console.log(vetorNum[i]);
}

console.log('Elementos pares: ');
for (let i = 0; i < 10; i++){
    if (vetorNum[i] % 2 === 0){
        console.log(vetorNum[i]);
    }
}

console.log(`Soma: ${soma}`);
console.log(`Média: ${soma / 10}`)