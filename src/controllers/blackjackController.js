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

    function pegar(req, res){
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

module.exports = {
    pontuar,
    pegar
}