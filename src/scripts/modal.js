let botoes = document.querySelectorAll("[data-modal-control]");

console.log(botoes);

for(let i = 0; i < botoes.length; i++){
   botoes[i].addEventListener("click",function(event){
        let valorModal = botoes[i].getAttribute("data-modal-control");
        document.getElementById(valorModal).classList.toggle("mostrar__modal");
   });
}

let botaoEnviar = document.getElementById("botaoEnviar");
let email = document.getElementById("email");
