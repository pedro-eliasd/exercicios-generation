import { Queue } from "./Queue";
import leia = require('readline-sync');

/**
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string (ok),
para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
 */

const fila = new Queue<string>();
let opcao : number;

console.log('Menu')
console.log('********************************************************************************')
console.log('1 - Adicionar Cliente na fila.');
console.log('2 - Listar todos os clientes.');
console.log('3 - Retirar cliente da fila.');
console.log('0 - Sair.');
console.log('********************************************************************************')

do{

    console.log('Entre com a opção desejada: ');
    opcao = leia.questionInt('');

    switch(opcao){
        case 1: 
            let cliente = leia.question('Digite o nome do Cliente:');
            fila.enqueue(cliente);
            console.log('Cliente adicionado com sucesso.');

            break;
        
        case 2: 
            if(fila.isEmpty() == true){
                console.log('A fila esta vazia.');
            }else{
                console.log('\nLista de clientes\n');
                fila.printQueue();
            }

            break;
        
        case 3:
            if (fila.isEmpty() == true){
                console.log('A fila esta vazia.');
            }else{
                fila.dequeue();
                console.log('Cliente removido da fila com sucesso!');
            }

            break
        case 0:
            console.log('Operação finalizada.');

            break;
}
} while(opcao !== 0);