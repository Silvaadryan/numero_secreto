let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
textoInicial()


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
function textoInicial(){
    exibirTextoNaTela('h1', `Jogo do numero </br> secreto`);
    exibirTextoNaTela('p', '  Escolha um numero entre 1 e 20');

};

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!! ');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let menssagemTentativas = ` Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor ');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior ');
        }
        tentativas++;


    }

}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 20 + 1)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial()
    document.getElementById ('reiniciar').setAttribute('true')

}
