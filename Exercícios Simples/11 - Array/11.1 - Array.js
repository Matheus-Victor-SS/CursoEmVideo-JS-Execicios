var num = [5, 6, 8, 2, 1, 6, 7, 9]
num.push(10)
//poe em ordem
num.sort()
console.log(num)
console.log(`Dentro do vetor existem ${num.length} valores`)
console.log(`O primeiro valor do vetor é ${num[0]}<br>`)
/*
var pos = 0
while(pos<num.length){
    console.log(`a posição ${pos} tem o valor: ${num[pos]}`)
    pos++
}*/

//busca o valor 6 e devolve seu indice
var a = num.indexOf(6)
//versao mais simples(para cada posição em num, faça:)
for(let pos in num){
    console.log(`a posição ${pos} tem o valor: ${num[pos]}`)
    pos++
}
console.log(a)
