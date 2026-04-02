//se por acaso os valores de um dos dois parametrios nao for passado,
//ele vai ser 0, assim não resulta em NaN
function soma(n1=0, n2=0){
    return n1+n2
}
console.log(soma(5))