function fatorial(n){
    if(n ==1){
        return 1
    }else{
        //ele pega o valor e multiplica com a fatorial do numero menor que ele
        //roda a função dentro dela mesma
        return n * fatorial (n-1)
    }
}
console.log(fatorial(5))