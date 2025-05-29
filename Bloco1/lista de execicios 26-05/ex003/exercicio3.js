const leia = require('readline-sync');

let salarioBruto = leia.questionFloat('Salario bruto: ');
let adcNoturno = leia.questionFloat('Adicional noturno: ');
let horaExtra = leia.questionFloat('Horas extras: ');
let desconto = leia.questionFloat('Descontos: ');

let salarioLiq = salarioBruto + adcNoturno + (horaExtra * 5) - desconto;
const formatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(salarioLiq);
console.log("Salario liquido: ", formatado);