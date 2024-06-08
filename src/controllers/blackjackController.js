var blackjackModel = require('../models/blackjackModel')


function pontuar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdVencida = req.body.qtdVencidaServer;
    var qtdPerdida = req.body.qtdPerdidaServer;
    var qtdEmpate = req.body.qtdEmpateServer;
    var qtdTotal = req.body.qtdTotalServer;
    var idUsuario = req.body.idUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    blackjackModel.pontuar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function atualizar(req, res) {

    const idUsuario = req.params.idUsuario; // Pegando o ID do parâmetro da URL
    const { qtdVencidaServer, qtdPerdidaServer, qtdEmpateServer, qtdTotalServer } = req.body;

    blackjackModel.verificar(idUsuario)
        .then(resultados => {
            if (resultados.length > 0) {
                // Usuário encontrado, atualizar os dados
                blackjackModel.atualizar(qtdVencidaServer, qtdPerdidaServer, qtdEmpateServer, qtdTotalServer, idUsuario)
                    .then(resultado => {
                        res.status(200).json({ message: 'Dados atualizados com sucesso!', resultado });
                    })
                    .catch(erro => {
                        console.error("\nHouve um erro ao atualizar os dados! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });
            } else {
                // Usuário não encontrado, inserir um novo registro
                blackjackModel.pontuar(qtdVencidaServer, qtdPerdidaServer, qtdEmpateServer, qtdTotalServer, idUsuario)
                    .then(resultado => {
                        res.status(201).json({ message: 'Dados inseridos com sucesso!', resultado });
                    })
                    .catch(erro => {
                        console.error("\nHouve um erro ao inserir os dados! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });
            }
        })
        .catch(erro => {
            console.error("\nHouve um erro ao verificar o usuário! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



function pegar(req, res) {
    blackjackModel.pegar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function verificar(req, res) {

    var id = req.params.idUsuario;

    // Mudamos para `query` para receber como parâmetro de URL
    blackjackModel.verificar(id)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("\nHouve um erro ao realizar verificar! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    pontuar,
    pegar,
    verificar, 
    atualizar
}