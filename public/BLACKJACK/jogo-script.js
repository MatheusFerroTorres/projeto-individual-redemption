var listaCrupiê = [];
var listaJogador = [];
var manilhas = ["<span style='color: red;display: contents'>♥</span>", "<span style='color: red;display: contents'>♦</span>", "♠", "♣"];

// Limita as compras do crupiê
var limitador = 0;

//JSON que armazena partidas
var partida = {
    qtdVencida: 0,
    qtdPerdida: 0,
    qtdEmpate: 0,
    qtdTotal: 1
};

function iniciarJogo() {
    bt1.style.display = 'none';
    bt2.style.display = 'block';
    bt3.style.display = 'block';
    bt4.style.display = 'none';

    div_jogador.innerHTML = '';
    div_crupie.innerHTML = '';

    comprarCarta();  // Comprar a primeira carta
    comprarCarta();  // Comprar a segunda carta
}

function comprarCarta() {
    var AleatorioCrupiê = Math.random();
    var AleatorioJogador = Math.random();
    var NovoAleatorioCrupiê = AleatorioCrupiê * 8 + 2;
    var NovoAleatorioJogador = AleatorioJogador * 8 + 2;
    var ResultadoCrupiê = NovoAleatorioCrupiê.toFixed(0);
    var ResultadoJogador = NovoAleatorioJogador.toFixed(0);
    if (limitador < 17) {
        listaCrupiê.push(ResultadoCrupiê);
    }
    listaJogador.push(ResultadoJogador);
    atualizarPainel();
    verificarVencedor();


}

function atualizarPainel() {
    var TotalCrupiê = 0;
    var TotalJogador = 0;
    div_jogador.innerHTML = '';
    div_crupie.innerHTML = '';

    for (var cont = 0; cont < listaJogador.length; cont++) {
        div_jogador.innerHTML += `<br> Carta ${cont + 1}: ${listaJogador[cont]}${manilhas[Math.floor(Math.random() * manilhas.length)]}<br>`;
        TotalJogador += Number(listaJogador[cont]);
    }

    for (var cont = 0; cont < listaCrupiê.length; cont++) {
        div_crupie.innerHTML += `<br> Carta ${cont + 1}: ${listaCrupiê[cont]}${manilhas[Math.floor(Math.random() * manilhas.length)]} <br>`;
        TotalCrupiê += Number(listaCrupiê[cont]);
    }

    div_total.innerHTML = `<br> Total do Crupiê: ${TotalCrupiê} <br> Total do Jogador: ${TotalJogador} <br> Partida Atual: ${partida.qtdTotal}`;
    limitador = TotalCrupiê;
}

function verificarVencedor() {
    var TotalCrupiê = 0;
    for (var cont = 0; cont < listaCrupiê.length; cont++) {
        TotalCrupiê += Number(listaCrupiê[cont]);
    }

    var totalJogador = 0;
    for (var cont = 0; cont < listaJogador.length; cont++) {
        totalJogador += Number(listaJogador[cont]);
    }

    if (totalJogador >= 21 && TotalCrupiê >= 21) {
        partida.qtdEmpate++
        alert(`Empate! Crupiê ficou com ${TotalCrupiê}. Você ficou com ${totalJogador}.`);
        fimDeJogo();
    } else if (totalJogador > 21) {
        partida.qtdPerdida++
        alert(`Você estourou com ${totalJogador}. Crupiê Ganhou!`);
        fimDeJogo();
    } else if (TotalCrupiê > 21) {
        partida.qtdVencida++
        alert(`Crupiê estourou com ${TotalCrupiê}. Você Ganhou!`);
        fimDeJogo();

    } else if (totalJogador == 21) {
        partida.qtdVencida++
        alert("Blackjack! Você venceu!");
        fimDeJogo();
    } else if (TotalCrupiê == 21) {
        partida.qtdPerdida++
        alert("Blackjack! Crupiê venceu!");
        fimDeJogo();
    }
}

function parar() {
    var TotalCrupiê = 0;
    for (var cont = 0; cont < listaCrupiê.length; cont++) {
        TotalCrupiê += Number(listaCrupiê[cont]);
    }

    var totalJogador = 0;
    for (var cont = 0; cont < listaJogador.length; cont++) {
        totalJogador += Number(listaJogador[cont]);
    }

    for (var cont = 0; TotalCrupiê < 17; cont++) {
        var AleatorioCrupiê = Math.random();
        var NovoAleatorioCrupiê = AleatorioCrupiê * 8 + 2;
        var ResultadoCrupiê = NovoAleatorioCrupiê.toFixed(0);
        listaCrupiê.push(ResultadoCrupiê);
        TotalCrupiê += Number(ResultadoCrupiê);
    }

    atualizarPainel();

    if (TotalCrupiê > 21) {
        partida.qtdVencida++
        alert(`Crupiê estourou com ${TotalCrupiê}. Você Ganhou!`);
        fimDeJogo();
    } else if (totalJogador > TotalCrupiê) {
        partida.qtdVencida++
        alert(`Você Venceu! Com ${totalJogador}.`);
        fimDeJogo();
    } else if (TotalCrupiê == 21) {
        partida.qtdPerdida++
        alert("Blackjack! Crupiê venceu!");
        fimDeJogo();
    } else if (totalJogador < TotalCrupiê) {
        partida.qtdPerdida++
        alert(`Crupiê venceu. Com ${TotalCrupiê}.`);
        fimDeJogo();
    } else if (totalJogador >= 21 && TotalCrupiê >= 21) {
        partida.qtdEmpate++
        alert(`Empate! Crupiê ficou com ${TotalCrupiê}. Você ficou com ${totalJogador}.`);
        fimDeJogo();
    }
}

function fimDeJogo() {
    partida.qtdTotal = partida.qtdVencida + partida.qtdPerdida + partida.qtdEmpate + 1

    if (partida.qtdTotal > 10) {
        mesa.style.display = 'none';
        div_painel.style.display = 'none';
        bt1.style.display = 'none';
        bt2.style.display = 'none';
        bt3.style.display = 'none';
        bt4.style.display = 'none';
        fim.style.display = 'block';
        inserir();
    } else {
        fim.style.display = 'none';
        bt2.style.display = 'none';
        bt3.style.display = 'none';
        bt4.style.display = 'block';
    }
}

function reiniciarJogo() {
    limitador = 0;
    div_jogador.style.display = 'flex';
    div_crupie.style.display = 'flex';
    fim.style.display = 'none';
    bt1.style.display = 'block';
    bt2.style.display = 'none';
    bt3.style.display = 'none';
    bt4.style.display = 'none';
    listaCrupiê = [];
    listaJogador = [];
    div_jogador.innerHTML = '';
    div_crupie.innerHTML = '';
    div_total.innerHTML = '';
}