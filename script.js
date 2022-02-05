let numeroDeCartasDoJogo = prompt('Qual o número de cartas?');

while (numeroDeCartasDoJogo % 2 !== 0 || numeroDeCartasDoJogo < 4 || numeroDeCartasDoJogo > 14){
    numeroDeCartasDoJogo= prompt('Qual o número de cartas?');
}

let numeroDeCartas = parseInt((numeroDeCartasDoJogo)/2);

let arrayDeIndices = [0,1,2,3,4,5,6];

function embaralhaCartas(array){    
    array = array.sort(comparador); 
}   

embaralhaCartas(arrayDeIndices);

function comparador() { 
	return Math.random() - 0.5; 
}

let cartas = [];

function selecionarCartas (){

    for (let i=0; i< numeroDeCartas; i++){
     cartas.push(arrayDeIndices[i]);
     cartas.push(arrayDeIndices[i]);
    }
}

selecionarCartas();

embaralhaCartas(cartas);

function mostrarCartas(){

    let conteudoDeCartas = document.querySelector(".content");
     for(let i=0; i< cartas.length ; i++){     
        conteudoDeCartas.innerHTML += `
            <div class="carta" onclick="virarCarta(this)">
                <span class="frente">
                    <img src="./img/parrot.${cartas[i]}.gif"></img>
                </span>
                
                <span class="verso" >
                    <img src="./img/front.png "></img>
                </span>            
            </div>    
        `
    }
}

mostrarCartas();

function virarCarta(carta){
    let cartaFrente = carta.querySelector(".frente");
    cartaFrente.classList.toggle("virada");

    let cartaVerso = carta.querySelector(".verso");
    cartaVerso.classList.toggle("virada");
}







