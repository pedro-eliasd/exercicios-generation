programa
{
	
	funcao inicio()
	{
		inteiro vet[10], troca

		escreva("Digite uma sequencia de 10 numeros inteiros em qualquer ordem\n")
		para(inteiro i = 0; i<10; i++){
			escreva("Digite o ", i+1, "º número: ")
			leia(vet[i])
		}

		para(inteiro i=0; i<10; i++){
			para (inteiro j=0; j<9-i; j++){
				se(vet[j] < vet[j+1]){
					troca = vet[j]
					vet[j] = vet[j+1]
					vet[j+1] = troca
				}
			}
		}
		limpa()
		escreva("Ordem decrescente: ")
		para(inteiro i = 0; i<10; i++){
			escreva(vet[i], " | ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 515; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */