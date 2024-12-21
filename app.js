let listaNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto ;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do númeroSecreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10' );
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do númeroSecreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10' );

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o númeroSecreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O númeroSecreto é menor!');
        } else {
            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O númeroSecreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
    }

function gerarNumeroAleatorio() {  
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}



