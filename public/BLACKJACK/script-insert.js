var id = sessionStorage.getItem('idUsuario')

// FUNÇÃO QUE REALIZA A REQUISIÃO PARA ROTA 'pontuar-ou-atualizar'

function pontuarOuAtualizar() {
    var id = sessionStorage.getItem('idUsuario');
    
    if (!id) {
        console.error('ID do usuário não encontrado no sessionStorage.');
        return;
    }

    fetch('/blackjack/pontuar-ou-atualizar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            qtdVencida: partida.qtdVencida,
            qtdPerdida: partida.qtdPerdida,
            qtdEmpate: partida.qtdEmpate,
            qtdTotal: partida.qtdTotal,
            idUsuario: id
        })
    })
        .then(res => {
            if (res.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.log('Erro ao enviar dados.');
                res.json().then(response => alert(response));
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
}