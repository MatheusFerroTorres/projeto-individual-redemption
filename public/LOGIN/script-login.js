function entrar(){
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    
fetch('/usuarios/autenticar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
    })
}) .then(res =>{
    if (res.ok){
        res.json().then(response => sessionStorage.setItem('idUsuario',`${response[0].idUsuario}`))
        window.open('/REGRAS/REGRAS.html', '_self')
    } else{
        res.json().then(response => alert(response))
        erro_email.style.display = 'block'
        erro_senha.style.display = 'block'
    }
})
}