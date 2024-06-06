
function cadastrar() {
    var nome = ipt_nome.value;
    var senha = ipt_senha.value;
    var confirmacaoSenha = ipt_confirmar.value;
    var idade = ipt_idade.value;
    var email = ipt_email.value;
    var telefone = ipt_telefone.value;

    var aceito = 0;

    /* Validação do nome */
    if (nome.length < 3) {
        ipt_nome.style.borderBottom = '1px solid #FF0000';
        erro_nome.style.display = 'block'
    } else {
        ipt_nome.style.borderBottom = '1px solid #FFFFFF';
        erro_nome.style.display = 'none'
        aceito++
    }

    /* Validação da senha */
    if (senha.length < 6 && (senha.indexOf('&') == -1 || senha.indexOf('@') == -1 || senha.indexOf('#') == -1 || senha.indexOf('$') == -1 || senha.indexOf('%') == -1)) {
        ipt_senha.style.borderBottom = '1px solid #FF0000';
        erro_senha1.style.display = 'block';
    } else {
        ipt_senha.style.borderBottom = '1px solid #FFFFFF';
        erro_senha1.style.display = 'none';
        aceito++;
    }

    /* Validação da confirmação da senha */
    if (confirmacaoSenha != senha) {
        ipt_confirmar.style.borderBottom = '1px solid #FF0000';
        erro_senha2.style.display = 'block'
    } else {
        ipt_confirmar.style.borderBottom = '1px solid #FFFFFF';
        erro_senha2.style.display = 'none'
        aceito++
    }

    /* Validação do e-mail */
    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        ipt_email.style.borderBottom = '1px solid #FF0000';
        erro_email.style.display = 'block'
    } else {
        ipt_email.style.borderBottom = '1px solid #FFFFFF';
        erro_email.style.display = 'none'
        aceito++
    }

    /* Validação do telefone */
    if (telefone.length != 11) {
        ipt_telefone.style.borderBottom = '1px solid #FF0000';
        erro_telefone.style.display = 'block'
    } else {
        ipt_telefone.style.borderBottom = '1px solid #FFFFFF';
        erro_telefone.style.display = 'none'
        aceito++
    }

    /* Validação da idade */
    if (idade < 18) {
        ipt_idade.style.borderBottom = '1px solid #FF0000';
        erro_idade.style.display = 'block'
    } else {
        ipt_idade.style.borderBottom = '1px solid #FFFFFF';
        erro_idade.style.display = 'none'
        aceito++
    }

    // Parte responsável por direcionar os inputs para o banco usando a API
    // Validando se todos os campos passaram
    if (aceito == 6) {
        fetch('/usuarios/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
                telefoneServer: telefone
            })
        }).then(res => {
            if (res.ok) {
                window.open('/LOGIN/LOGIN.html', '_self')
            } else {
                res.json().then(response => alert(response))
            }
        })
    } else {
        alert(`Falha ao cadastrar!`)
    }
}
