//fatorial
function fatorial(n){
    var fat = 1
    for(let c = n ; c > 1 ; c--){
        fat*=c
        //5! = 1*5*4*3*2*1 = 120
    }
    return fat
}
console.log(fatorial(5))