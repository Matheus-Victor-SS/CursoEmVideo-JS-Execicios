var lista = []
function analisar(){
var res = document.getElementById('res')
var num = document.getElementById('num')
var res2 = document.getElementById('res2')
let pos = 0
res.innerHTML =`O valores são:<br><br>`

    if(num.value.length == 0){
    res.style.color='red'
    res.innerHTML=`Insira algum valor`
}else if(num.value>100||num.value<=0){
    res.style.color='red'
    res.innerHTML=`Insira um valor válido`
}else{
    lista.push(Number(num.value))
    res.style.color='black'
    //limpa o campo ao enviar e ja foca nele denovo
    num.value=''
    num.focus()
    res2.innerHTML = ''
    for(pos in lista){
        res2.innerHTML += (`O número ${lista[pos]} foi inserido<br>`)
    pos++
}
}
}
function finalizar(){
    var final = document.getElementById('final')
    if(lista.length==0){
        final.innerHTML=`Salve os números primeiro`
        final.style.color='red'
    }else{
        lista.sort((a, b) => a - b)//antes ordenava como texto, ent 10 era maior q
        let soma = 0
        for(let i=0; i< lista.length;i++){
            soma+=lista[i]
        }
        final.style.color='black'
        final.innerHTML=`Ao todo temos ${lista.length} números cadastrados.<br><br>`
        final.innerHTML+=`O menor valor informado foi ${lista[0]}.<br><br>`
        //.at(-1) pega o ultimo valor da array
        final.innerHTML+=`O maior valor informado foi ${lista.at(-1)}.<br><br>`
        final.innerHTML+=`Somando todos os valores, temos ${soma}.<br><br>`
        final.innerHTML+=`A média dos valores digitados foi ${soma/lista.length.toFixed(2)}.<br><br>`

    }

}