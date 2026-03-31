function contar(){
let cont = document.getElementById('cont')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')
//se estiver um campo vazio
if(passo.value.length==0||cont.value.length==0||fim.value.length==0){
    res.innerHTML=`algum campo esta vazio`
    res.style.color='red'
}else if(passo.value<=0){
        res.innerHTML=`Passo inválido! Começe no 1`
        res.style.color='red'
    }else{
        //passando valores do DOM para Number
        let i=Number(cont.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        res.innerHTML=`resultado: `
        //crescente
        if(i < f){
           for(let c = i; c<=f; c+=p){
        res.innerHTML+=`${c}, `
        res.style.color='black'
    }
    res.innerHTML+=`\u{1F3C1}` 
    //decrescente
    }else{
        for(let c = i; f<=c; c-=p){
        res.innerHTML+=`${c}, `
        res.style.color='black'
    }
    //emoji bandeira
     res.innerHTML+=`\u{1F3C1}` 
}
}
}