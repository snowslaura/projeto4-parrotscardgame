

let numeroDeCartasDoJogo = prompt('Qual o número de cartas?');
let numeroDeCartas = (parseInt(numeroDeCartasDoJogo)/2);
let arrayDeIndices = [0,1,2,3,4,5,6];
let cartas = [];
let cartaVirada = false;
let qtdJogadas = 0;
let carta;
let tempoDeJogo = 0;
let qtdCartasViradas = 0;
const conteudo = document.querySelectorAll(".virada")

// Iniciando do jogo 

while (numeroDeCartasDoJogo % 2 !== 0 || numeroDeCartasDoJogo < 4 || numeroDeCartasDoJogo > 14){
    numeroDeCartasDoJogo= prompt('Qual o número de cartas?');
}



// Lógica para embaralhar as cartas 

function embaralhaCartas(array){    
    array = array.sort(comparador); 
}   

embaralhaCartas(arrayDeIndices);

function comparador() { 
	return Math.random() - 0.5; 
}

// Lógica para selecionar as cartas a serem jogadas

function selecionarCartas (){

    for (let i=0; i< numeroDeCartas; i++){
     cartas.push(arrayDeIndices[i]);
     cartas.push(arrayDeIndices[i]);
    }
}

selecionarCartas();

embaralhaCartas(cartas);

// Lógica para mostrar as cartas

function mostrarCartas(){

    let conteudoDeCartas = document.querySelector(".conteudo");

     for(let i=0; i< cartas.length ; i++){     
        conteudoDeCartas.innerHTML += `
            <div class="carta" onclick="virarCarta(this)" data-identifier="card" >
                <span class="frente" data-identifier="front-face" >
                    <img src="./img/parrot.${cartas[i]}.gif"></img>
                </span>
                
                <span class="verso" data-identifier="back-face"  >
                    <img src="./img/front.png "></img>
                </span>            
            </div>    
        `
    }
}

mostrarCartas();

// Logica para virar as cartas


    function virarCarta(carta){

        let cartaFrente = carta.querySelector(".frente");
        cartaFrente.classList.add("virada");

        let cartaVerso = carta.querySelector(".verso");
        cartaVerso.classList.add("virada");

        if (!cartaVirada){
            
            cartaVirada = true;
            primeiraCarta = carta;
            
        }
        else {
            cartaVirada = false;
            segundaCarta = carta;
            
    
            compararCartas(primeiraCarta,segundaCarta);
        }
        
        qtdJogadas++
        qtdCartasViradas++
        jogadasSeguidas()
        terminarJogo() 
        tempoPassado() 
    }


  
// Lógica para comparar as cartas 

function compararCartas(carta1,carta2){
    if (carta1.innerHTML!=carta2.innerHTML){

        setTimeout(function(){ 
            let cartaFrente1 = carta1.querySelector(".frente");
            cartaFrente1.classList.remove("virada");

            let cartaVerso1 = carta1.querySelector(".verso");
            cartaVerso1.classList.remove("virada");

            let cartaFrente2 = carta2.querySelector(".frente");
            cartaFrente2.classList.remove("virada");

            let cartaVerso2 = carta2.querySelector(".verso");
            cartaVerso2.classList.remove("virada");
        }, 1000)
    }
}

// Lógica para demorar para as próximas jogadas

function jogadasSeguidas(){

    if (qtdCartasViradas === 2){
       setTimeout(function(){

        compararCartas()
       }, 2000);
       return;
    }
    
}



function tempoDeJogoPassado(){
    if (qtdJogadas > 0){
        let relogio = document.querySelector(".relogio")
        relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
    }   
}

const intervalo = setInterval(tempoDeJogoPassado,1000);

function tempoPassado(){
    const conteudo = document.querySelectorAll(".virada") 
    
    if (conteudo.length/2 == numeroDeCartasDoJogo){
        clearInterval(intervalo);
       
    }

    tempoDeJogo = document.querySelector(".relogio").innerHTML;
    
}



function terminarJogo(){
    const conteudo = document.querySelectorAll(".virada")
    
        if(conteudo!==null){
                            
            if (conteudo.length/2 == numeroDeCartasDoJogo ){
                        

                setTimeout(function(){
                    let resposta = prompt(`Parabéns, você ganhou o jogo em ${qtdJogadas} jogadas e ${tempoDeJogo} segundos. Gostaria de reiniciar? Se sim, escreva "S". Se não, digite "N"`)
                

                if(resposta == "S"){
                    location.reload();
                }
                else if ((resposta == "N")) {
                    alert("OK, obrigada!")
                }
                }, 1000)
                
            }
        }
}



