// Botão para gerar a paleta de cores aleatoriamente e salva no localStorage
function recebeClick() {

  let local0 = document.getElementById('cor1');
  local0.style.backgroundColor = "black";

  const local1 = document.getElementById('cor2');
  local1.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);

  const local2 = document.getElementById('cor3');
  local2.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);

  const local3 = document.getElementById('cor4');
  local3.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);

let test = local1.style.backgroundColor + "@" + local2.style.backgroundColor + "@" + local3.style.backgroundColor;
localStorage.setItem('colorPalette', test);
}

const butao = document.getElementById('button-random-color');
butao.addEventListener('click', recebeClick);
// Botão para gerar a paleta de cores aleatoriamente e salva no localStorage




// Função para carregar as cores que estavam na paleta quando a aba foi fechada pela ultima vez
window.onload = function () {
    document.getElementById('cor1').style.backgroundColor = "black";
    let aqui = "";
    if(localStorage.length != 0){
     aqui = localStorage.getItem('colorPalette').split("@");
    }
    let savedCor2 = aqui[0];
    let savedCor3 = aqui[1];
    let savedCor4 = aqui[2];
    document.getElementById('cor2').style.backgroundColor = savedCor2;
    document.getElementById('cor3').style.backgroundColor = savedCor3;
    document.getElementById('cor4').style.backgroundColor = savedCor4;
}
// Função para carregar as cores que estavam na paleta quando a aba foi fechada pela ultima vez


// designa a classe "selected" a cor clicada e tira a classe da cor anterior
document.getElementById('cor1').classList.add("selected");
let tesste;

function recebeClick2(e) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add("selected");
    // document.getElementsByClassName('selected')[0].style.backgroundColor;
}
// designa a classe "selected" a cor clicada e tira a classe da cor anterior


// transforma a paleta de cores em botoes
function criaButao(){
let listaClassColor = document.getElementsByClassName('color');
let butao2 = [];
for(let index = 0; index < listaClassColor.length; index += 1){
    butao2[index] = listaClassColor[index];
    butao2[index].addEventListener('click', recebeClick2);
}
}
criaButao();
// transforma a paleta de cores em botoes

function recebeClick3(e){
    e.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
}

function criaButao2() {
    let listaDePixel = document.getElementsByClassName('pixel');
    let botoesPixel = [];
    for(let index = 0; index < listaDePixel.length; index += 1){
        botoesPixel[index] = listaDePixel[index];
        botoesPixel[index].addEventListener('click', recebeClick3);
    }
}
criaButao2();