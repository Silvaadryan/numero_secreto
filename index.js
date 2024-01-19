alert ('Seja Bem vindo(a) ao jogo do chute, escreva algum numero ate acertar o numero secreto, BOA SORTE!!');

let numeroSecreto = (parseInt(Math.random() * 500) + 1);
 console.log(numeroSecreto)
let chute
let tentativas = 1
 
while ( chute != numeroSecreto){

    chute = prompt("Digite um numero entre 1 e 500");
  
    if( chute == numeroSecreto){
        alert(` Parabéns o numero secreto é ${numeroSecreto} vocé teve o total de (${tentativas})  `)
    }
    else{ 
        if(chute > numeroSecreto ){
            alert( `O numero secreto é menor que ${chute}`)
        }
        else{
            alert (`O numero secreto é maior que ${ chute} `)
        }
    }


    tentativas++

};

tentativas == 1 ? "tentativa": "tentativas"

 // ``