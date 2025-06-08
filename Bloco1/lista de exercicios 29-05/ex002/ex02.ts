import leia = require('readline-sync');

const setNumeros: Set<number> = new Set<number>;

console.log('Digite 10 números inteiros (não repetidos)')
for(let i = 0; i<10; i++){
    setNumeros.add(leia.questionInt(`${i+1} numero: `))
}

console.log('\nLista de números: \n')
for(let numero of setNumeros){
    console.log(numero);
}