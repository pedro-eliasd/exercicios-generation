programa
{
	funcao inicio()
	{
		inteiro vet[10], pares[10], impares[10], soma=0
		real media

		escreva("Digite uma sequencia de 10 números inteiros:\n")
		para(inteiro i=0; i<10; i++){
			escreva("Digite o ", i+1, "º número: ")
			leia(vet[i])
		}

		para(inteiro i=0; i<10; i++){
			se(i%2==0){
				pares[i] = vet[i]
				impares[i] = 0
				soma = soma + vet[i]
				
			} senao{
				impares[i] = vet[i]
				pares[i] = 0
				soma = soma + vet[i]
			}
		}
		media = soma/10
		limpa()

		escreva("Elementos nos índices Pares:\n")
		para(inteiro i=0; i<10; i++){
			se(impares[i]!=0){
				escreva(impares[i], " | ")
			}
		}
		

		escreva("\nElementos nos índices Ímpares:\n")
		para(inteiro i=0; i<10; i++){
			se(pares[i]!=0){
				escreva(pares[i], " | ")
			}
		}

		escreva("\nSoma:\n", soma)
		escreva("\nMédia:\n", media)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 644; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */