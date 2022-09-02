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


// designa a classe "selected" a cor clicada e tira a classe da cor anterior
document.getElementById('cor1').classList.add("selected");

function recebeClick2(e) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    e.target.classList.add("selected");
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

// o pixel que for clicado recebe backgroundColor atual do elemento na class 'selected' e é salva no storage
function recebeClick3(e){
    e.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    let aqui = [];
    let listaDePixels2 = document.getElementsByClassName('pixel');
    for(let index = 0; index < listaDePixels2.length; index += 1){
        aqui[index] = listaDePixels2[index].style.backgroundColor + "@";
    }
    localStorage.setItem('pixelBoard', aqui);

}
// o pixel que for clicado recebe backgroundColor atual do elemento na class 'selected'e é salva no storage

// transforma os pixels em butao
function criaButao2() {
    let listaDePixels2 = document.getElementsByClassName('pixel');
    for(let index = 0; index < listaDePixels2.length; index += 1){
        listaDePixels2[index].style.backgroundColor = '#ffffff';
    }

    let listaDePixel = document.getElementsByClassName('pixel');
    let botoesPixel = [];
    for(let index = 0; index < listaDePixel.length; index += 1){
        botoesPixel[index] = listaDePixel[index];
        botoesPixel[index].addEventListener('click', recebeClick3);
    }
}
criaButao2();
// transforma os pixels em butao

// cria o botao 'Limpar' que chama uma função que deixa todos os pixels bracos
const butaoLimpa = document.getElementById('clear-board');
butaoLimpa.addEventListener('click', function () {
    const listaDePixels = document.getElementsByClassName('pixel');
    console.log(listaDePixels);
    for(let index = 0; index < listaDePixels.length; index += 1){
        listaDePixels[index].style.backgroundColor = '#ffffff';
    }

    let aqui = [];
    let listaDePixels2 = document.getElementsByClassName('pixel');
    for(let index = 0; index < listaDePixels2.length; index += 1){
        aqui[index] = listaDePixels2[index].style.backgroundColor + "@";
    }
    
    localStorage.setItem('pixelBoard', aqui);
})
// cria o botao 'Limpar' que chama uma função que deixa todos os pixels bracos


// Função para carregar as cores que estavam na paleta quando a aba foi fechada pela ultima vez
window.onload = function () {
    document.getElementById('cor1').style.backgroundColor = "rgb(0, 0, 0";
    document.getElementById('cor2').style.backgroundColor = "rgb(255, 0, 0";
    document.getElementById('cor3').style.backgroundColor = "rgb(0, 0, 255";
    document.getElementById('cor4').style.backgroundColor = "rgb(0, 128, 0";
    let aqui = "";
    if(localStorage.length != 0){
        if(localStorage.getItem('colorPalette') !== null){
        aqui = localStorage.getItem('colorPalette').split("@");
        }
    }
    let savedCor2 = aqui[0];
    let savedCor3 = aqui[1];
    let savedCor4 = aqui[2];
    document.getElementById('cor2').style.backgroundColor = savedCor2;
    document.getElementById('cor3').style.backgroundColor = savedCor3;
    document.getElementById('cor4').style.backgroundColor = savedCor4;
    
    // pula pula pula pula 
    if(localStorage.getItem('pixelBoard') !== null){
        let aqui2 = "";
        aqui2 = localStorage.getItem('pixelBoard').split("@");
        let listaDePixels = document.getElementsByClassName('pixel');
        for(let index = 1; index <= listaDePixels.length; index += 1){
            aqui2[index] = aqui2[index].replace(",", "");
        }
        aqui2.length = aqui2.length - 1;
        for(let index = 0; index < listaDePixels.length; index += 1){
            listaDePixels[index].style.backgroundColor = aqui2[index];
        }
    }else if(localStorage.getItem('pixelBoard') == null){
        let listaDePixels2 = document.getElementsByClassName('pixel');
        for(let index = 0; index < listaDePixels2.length; index += 1){
            listaDePixels2[index].style.backgroundColor = '#ffffff';
        }
    }
    
    // aqui2 = JSON.stringify(aqui2)
}
// Função para carregar as cores que estavam na paleta quando a aba foi fechada pela ultima vez