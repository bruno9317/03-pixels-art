function recebeClick(){

    let local1 = document.getElementById("cor2");
    local1.style.backgroundColor =  "#" + Math.floor(Math.random() * 1000000);

    let local2 = document.getElementById("cor3");
    local2.style.backgroundColor =  "#" + Math.floor(Math.random() * 1000000);

    let local3 = document.getElementById("cor4");
    local3.style.backgroundColor =  "#" + Math.floor(Math.random() * 1000000);
}

let butao = document.getElementById("button-random-color");
butao.addEventListener("click", recebeClick);