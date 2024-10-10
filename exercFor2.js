/*2. Números Pares 
Enunciado: Crie um laço for que imprima apenas os números pares entre 1 e 20*/

function pares(){ // inicio function pares

    for (let numero=1; numero<21; numero++){ //inicio de for
        if (numero % 2 == 0){ //calculo do resto e compara se é igual a zero
            console.log( numero, "é par" ) //imprime o valor da variavel numero
        } // fim do for

    }
}    // fim function pares
pares()