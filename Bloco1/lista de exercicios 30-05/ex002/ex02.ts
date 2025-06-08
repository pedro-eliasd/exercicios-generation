/**Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string,
 * para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
 */

import { Stack } from "./Stack";
import leia = require('readline-sync');

const pilhaLivros = new Stack<string>();
let opcao : number;

console.log('Menu')
console.log('********************************************************************************')
console.log('1 - Adicionar livro na pilha.');
console.log('2 - Listar todos os livros.');
console.log('3 - Retirar livro da pilha.');
console.log('0 - Sair.');
console.log('********************************************************************************')

do{
    console.log('Entre com a opção desejada: ')
    opcao = leia.questionInt('');

    switch(opcao){
        case 1:
            let livro = leia.question('Digite o titulo do livro: ');
            pilhaLivros.push(livro);
            console.log('Livro adicionado com sucesso!\n');
            break;
        case 2:
            if(pilhaLivros.isEmpty() == true){
                console.log('A pilha esta vazia.');
            }else{
                console.log('\nPilha de livros: ');
                pilhaLivros.printStack();
            }
            break;
        case 3:
            if(pilhaLivros.isEmpty() == true){
                console.log('A pilha esta vazia.');
            }else{
                pilhaLivros.pop();
                console.log('Livro removido com sucesso!')
            }
            break;
        case 0:
            console.log('Operação finalizada.')
            break;
    }
}while(opcao !== 0);


