const leia = require('readline-sync');

let numero;
let soma = 0;

do{
    numero = leia.questionInt('Digite um numero: ');
    if (numero > 0){
        soma = soma + numero;
    }
} while(numero != 0);

console.log(`A soma dos numeros positivos é: ${soma}`)