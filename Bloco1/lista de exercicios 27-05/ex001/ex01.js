const leia = require('readline-sync');

let num1 = leia.questionInt('Digite o numero A: ');
let num2 = leia.questionInt('Digite o numero B: ');
let num3 = leia.questionInt('Digite o numero C: ');

let soma = num1 + num2;

if (soma > num3){
    console.log(`${num1} + ${num2} = ${soma} > ${num3}\nA soma de A + B é maior que C.`);
} else if (soma < num3){
    console.log(`${num1} + ${num2} = ${soma} < ${num3}\nA soma de A + B é menor que C.`);
}else {
    console.log(`${num1} + ${num2} = ${soma} = ${num3}\nA soma de A + B é igual a C.`);
}