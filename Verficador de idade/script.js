function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('year')
    var res = document.getElementById('res')
    //se valor menor que 0 digitos
    if (year.value.length == 0 || year.value > ano){
        res.innerHTML=`<p>Ano inválido`
        res.style.color="red"
    }
    else{
        res.style.color="lightblue"
        res.style.fontWeight="600"
        var fsex = document.getElementsByName('radsex')
        //converte antes o valor para Number
        var idade = ano - Number(year.value)
        var genero=''
        //criando imagem pelo js
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        //confere o radio marcado pelo index
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'menino.jpg')
                img.style.height='300px'
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'jovem h.jpg')
                img.style.height='300px'
            }else if(idade<59){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
                img.style.height='300px'
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
                img.style.height='300px'
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'menina.jpg')
                img.style.height='300px'
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'jovem m.jpg')
                img.style.height='300px'
            }else if(idade<59){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
                img.style.height='300px'
            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
                img.style.height='300px'
                img.style.width='300px'
            }
        }
        res.innerHTML=`Gênero: ${genero} e idade: ${idade}`
        res.appendChild(img)
    }
}