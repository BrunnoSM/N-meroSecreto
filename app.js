let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 }); // Função exclusiva da importação desse link: <script src="https://code.responsivevoice.org/responsivevoice.js"></script> na página HTML
}

exibirTextoNaTela('h1', "Escolha um número entre 1 e 10");

function verificarChute() {

    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (numeroSecreto == chute) {
        exibirTextoNaTela('p', `Muito bem, você descobriu o número secreto com ${tentativas} ${palavraTentativa}, parabéns!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroSecreto > chute) {
        exibirTextoNaTela('p', `O número secreto é maior do que o ${chute}`);
    } else {
        exibirTextoNaTela('p', `O número secreto é menor do que o ${chute}`);
    }

    tentativas++;
    limpaTela();

};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limpaTela() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaTela();
    exibirTextoNaTela('p', '');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 1;
}