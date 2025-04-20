function responderSim() {
    document.getElementById("mensagem").style.display = "block";
}

function moverBotao() {
    let botao = document.getElementById("nao");
    
    // Garante que o botão já está com posição absoluta
    botao.style.position = "absolute";

    let larguraTela = window.innerWidth - botao.offsetWidth;
    let alturaTela = window.innerHeight - botao.offsetHeight;

    let novaPosicaoX = Math.random() * larguraTela;
    let novaPosicaoY = Math.random() * alturaTela;

    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}
