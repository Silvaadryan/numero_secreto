
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


 exibirTextoNaTela('h1' , `Jogo do numero </br> secreto`);
 exibirTextoNaTela('p' , '  Escolha um numero entre 1 e 20');

function verificarChute() {
    console.log('botao foi clicado ')

}
function gerarNumeroAleatorio(){ 
    parseInt(Math.random() * 10 + 1)
}

,,