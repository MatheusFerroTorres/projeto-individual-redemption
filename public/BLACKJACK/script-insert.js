var id = sessionStorage.getItem('idUsuario')

function pontuar() {
    const id = sessionStorage.getItem('idUsuario');
    if (!id) {
        console.error('ID do usuário não encontrado no sessionStorage.');
        return;
    }

    fetch(`/blackjack/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            qtdVencidaServer: partida.qtdVencida,
            qtdPerdidaServer: partida.qtdPerdida,
            qtdEmpateServer: partida.qtdEmpate,
            qtdTotalServer: partida.qtdTotal,
            idUsuarioServer: id
        })
    })
    .then(res => {
        if (res.ok) {
            console.log('Dados atualizados com sucesso!');
        } else {
            console.log('Erro ao atualizar dados.');
            res.json().then(response => alert(response));
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}