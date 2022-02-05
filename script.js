// Iniciando do jogo 

let numeroDeCartasDoJogo = prompt('Qual o número de cartas?');

while (numeroDeCartasDoJogo % 2 !== 0 || numeroDeCartasDoJogo < 4 || numeroDeCartasDoJogo > 14){
    numeroDeCartasDoJogo= prompt('Qual o número de cartas?');
}

let numeroDeCartas = parseInt((numeroDeCartasDoJogo)/2);

// Lógica para embaralhar as cartas 

let arrayDeIndices = [0,1,2,3,4,5,6];

function embaralhaCartas(array){    
    array = array.sort(comparador); 
}   

embaralhaCartas(arrayDeIndices);

function comparador() { 
	return Math.random() - 0.5; 
}

let cartas = [];

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
            <div class="carta" onclick="virarCarta(this)" >
                <span class="frente"  >
                    <img src="./img/parrot.${cartas[i]}.gif"></img>
                </span>
                
                <span class="verso"  >
                    <img src="./img/front.png "></img>
                </span>            
            </div>    
        `
    }
}

mostrarCartas();

// Logica para virar as cartas

let cartaVirada = false;

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
   
        comparandoCartas(primeiraCarta,segundaCarta);
    }
}

// Lógica para comparar as cartas 

function comparandoCartas(carta1,carta2){
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