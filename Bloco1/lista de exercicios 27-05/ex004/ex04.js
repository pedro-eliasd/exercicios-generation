const leia = require('readline-sync');

let num1 = leia.questionFloat('Digite o primeiro numero: ');
let num2 = leia.questionFloat('Digite o segundo numero: ');
let codigo = leia.questionInt('Operacao (1-4): ');
let operacao;

switch (codigo){
    case 1: 
        operacao = num1 + num2;
        console.log(`${num1.toFixed(2)} + ${num2.toFixed(2)} = ${operacao.toFixed(2)}`);
        break
    case 2:
        operacao = num1 - num2;
        console.log(`${num1.toFixed(2)} - ${num2.toFixed(2)} = ${operacao.toFixed(2)}`);
        break
    case 3:
    operacao = num1 * num2;
        console.log(`${num1.toFixed(2)} * ${num2.toFixed(2)} = ${operacao.toFixed(2)}`);
        break
    case 4:
    operacao = num1 / num2;
        console.log(`${num1.toFixed(2)} / ${num2.toFixed(2)} = ${operacao.toFixed(2)}`);
        break
    default:
        console.log('Operação inválida!');
}