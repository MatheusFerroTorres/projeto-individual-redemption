
function pontuar(){
    fetch('/blackjack/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            qtdVencidaServer: qtdVencida,
            qtdPerdidaServer: qtdPerdida,
            qtdEmpateServer: qtdEmpate,
            qtdTotalServer: qtdTotal,
            idUsuarioServer: sessionStorage.getItem('idUsuario')
        })
    }) .then(res =>{
        if (res.ok){
        } else{
            res.json().then(response => alert(response))
        }
    })
}