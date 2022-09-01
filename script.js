// Botão para gerar a paleta de cores aleatoriamente e salva no localStorage
function recebeClick() {
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

document.getElementById('cor1').classList.add("selected");

function recebeClick2(e) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add("selected");
}

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