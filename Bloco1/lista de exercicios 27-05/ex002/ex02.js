const leia = require('readline-sync');

let nome = leia.question('Digite o nome do doador: ');
let idade = leia.questionInt('Digite a idade do doador: ');
let primeiraVez = leia.keyInYN('Primeira doacao de sangue? (Y = sim / N = nao)')

if (idade >= 18 && idade <= 59){
    console.log(`${nome} esta apto a doar sangue!`)
} else if (idade <= 69 && primeiraVez == false){
    console.log(`${nome} esta apto a doar sangue!`)
} else{
    console.log(`${nome} não esta apto a doar sangue!`)
}