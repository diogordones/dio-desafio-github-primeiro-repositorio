let num = [5, 8, 2, 9, 3]
/*num.sort() //Organiza os elementos por ordem crescente
num[5] = 12 //adiciona mais um índice na variável
num.push(7) //o JS joga para a última posição o valor entre ()
num.length //comprimento da variável
console.log(`nosso vetor tem ${num} posições`)
*/

/*var pos = 0
for (var pos=0 ; pos<num.length ; pos++) {
    console.log(num[pos])
}
*/


//Forma ainda mais simplificada de fazer a mesma coisa. 'Para cada variável pos dentro de num, exiba o elemento'
for(var pos in num) {
    console.log(num[pos])
}