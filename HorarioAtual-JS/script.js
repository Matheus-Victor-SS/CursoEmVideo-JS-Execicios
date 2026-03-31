function Atualizar(){
        var res=document.getElementById('res')//marcando o local para substituir
        var txt=document.getElementById('txt')
        
        var data = new Date()//importando Date()
        var hora = data.getHours()
        var minuto = data.getMinutes(),
         segundos = data.getSeconds() <=9 ? "0"+data.getSeconds(): data.getSeconds()
         res.innerHTML = `${hora}:${minuto}:${segundos}`//coloca um do lado do outro
    
            if(hora > 12 && hora <=17){
                txt.innerHTML=`<p>Boa Tarde!</p>`
                document.body.style.backgroundImage='linear-gradient(to bottom, #498eca 0%, #00e0fe 100%)'
                document.body.style.height = "95.2vh";
                img.src="https://img.freepik.com/fotos-gratis/foto-de-baixo-angulo-de-uma-arvore-de-folhas-verdes-sob-um-ceu-claro_181624-19264.jpg?semt=ais_hybrid&w=740&q=80"
            }
            else if(hora > 17 && hora<=19){
                txt.innerHTML=`<p>Boa Noite!<br>Aproveite o por do Sol</p>`
                document.body.style.backgroundImage="linear-gradient(to bottom, #db8420 0%, #e66225 100%)"
                document.body.style.height = "95.2vh";
                img.src="https://img.nsctotal.com.br/wp-content/uploads/2024/04/A-tarde-e-um-otimo-momento-para-mandar-mensagem-para-amigos-e-familiares_Banco-de-Imagens.jpg"
            }
            else if(hora > 19 && hora<=23){
                txt.innerHTML=`<p>Boa Noite!</p>`
                document.body.style.backgroundImage = "linear-gradient(to bottom, #263191 0%, #07057c 100%)";
                document.body.style.height = "95.2vh";
                document.body.style.margin = "0";
                img.style.height="150px"
                img.src="https://static.vecteezy.com/ti/fotos-gratis/t1/4125202-panorama-da-noite-ceu-com-nuvens-e-lua-cheia-foto.jpg"
            }
            else if(hora>0 && hora<6){
                txt.innerHTML=`<p>Boa madrugada!</p>`
                document.body.style.backgroundImage="linear-gradient(to bottom, #383838 0%, #131313 100%)";
                document.body.style.height = "95.2vh";
                img.style.height='180px';
                img.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCjDtDHwQAooCvGoe8e9Nd87NPRZ8gBSMZamfwGI3qgxTZmVpdG-EWRd4nlxXwd156Ve7me9tdtRvhxAZzbuhGq8wwpfg9I68c9PhEJ6_wv-zYTrbn2BOg-OW8BUH7tenhcEOAHYXmQTba/s640/Lua.jpg"
            }
            else{
                txt.innerHTML=`<p>Bom dia!</p>`
                document.body.style.backgroundImage = "linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)";
                document.body.style.height = "95.2vh";
                document.body.style.margin = "0";
            }
        }
        setInterval(Atualizar, 1000)//atualiza a cada 1000 milisegundos

