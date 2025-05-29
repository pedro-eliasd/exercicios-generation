const leia = require('readline-sync');

let codigo = leia.questionInt('Codigo do produto (1 - 6): ');
let qtd = leia.questionFloat('Quantidade: ');
let valorTotal;

switch(codigo){
    case 1:
        valorTotal = qtd * 10.00;
        console.log(`Produto: Cachorro Quente\nValor total:R$${valorTotal.toFixed(2)}`);
        break
    case 2:
        valorTotal = qtd * 15.00;
        console.log(`Produto: X-Salada\nValor total:R$${valorTotal.toFixed(2)}`);
        break
    case 3:
        valorTotal = qtd * 18.00;
        console.log(`Produto: X-Bacon\nValor total:R$${valorTotal.toFixed(2)}`);
        break
    case 4:
        valorTotal = qtd * 12.00;
        console.log(`Produto: Bauru\nValor total:R$${valorTotal.toFixed(2)}`);
        break
    case 5:
        valorTotal = qtd * 8.00;
        console.log(`Produto: Refrigerante\nValor total:R$${valorTotal.toFixed(2)}`);
        break
    case 6:
        valorTotal = qtd * 13.00;
        console.log(`Produto: Suco de Laranja\nValor total:R$${valorTotal.toFixed(2)}`);
        break
}