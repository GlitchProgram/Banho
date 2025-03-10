function responderSim() {
    // Exibe a mensagem "Mentirosa!!" ao clicar em "Sim"
    document.getElementById("mensagem").style.display = "block";
}

function moverBotao() {
    let botao = document.getElementById("nao");
    let larguraTela = window.innerWidth - 120; // Para garantir que o botão não ultrapasse a tela
    let alturaTela = window.innerHeight - 50; // Para garantir que o botão não ultrapasse a tela

    let novaPosicaoX = Math.random() * larguraTela; // Gera uma nova posição X aleatória
    let novaPosicaoY = Math.random() * alturaTela; // Gera uma nova posição Y aleatória

    // Define a nova posição do botão "Não"
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}
