// Botão para gerar a paleta de cores aleatoriamente
function recebeClick() {
  const local1 = document.getElementById('cor2');
  local1.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);

  const local2 = document.getElementById('cor3');
  local2.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);

  const local3 = document.getElementById('cor4');
  local3.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000);
}

const butao = document.getElementById('button-random-color');
butao.addEventListener('click', recebeClick);
// Botão para gerar a paleta de cores aleatoriamente
