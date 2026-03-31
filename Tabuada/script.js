function contar(){
let num = document.getElementById('num')
let res = document.getElementById('res')
if(num.value.length == 0){
    res.innerHTML=`Insira um número`
    res.style.color='red'
}else{
    let n=Number(num.value)
    res.innerHTML=`resultado: <br>`
    res.style.color='black'
    for(var c=0;c<=10;c++){
        var final=n*c
        res.innerHTML+=`${n} X ${c} = ${final}<br>`
    }
}
}