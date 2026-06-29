var blackjackModel = require('../models/blackjackModel')


// ESSE END POINT REALIZA O INSERT E O UPDATE. 
// INSERT SE NÃO HOUVER DADOS NO BANCO, E UPDATE SE ELE ENCONTRAR ALGO.

function pontuarOuAtualizar(req, res) {

    // ATALHO (DESESTRUTURAÇÃO DE OBJETOS) PARA ATRIBUIR OS VALORES DO OBJETO req.body PARA AS VARIAVEIS

    var { qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario } = req.body;

    // VERIFICA SE O USUARIO JÁ POSSUE ALGUMA PARTIDA

    blackjackModel.verificarUsuario(idUsuario)
        .then(resultados => {
            if (resultados.length > 0) {

                // USUÁRIO ENCONTRADO, ENTÃO VAMOS ATUALIZAR OS DADOS

                blackjackModel.atualizar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario)
                    .then(resultado => {
                        res.status(200).json({ message: 'Dados atualizados com sucesso!', resultado });
                    })
                    .catch(erro => {
                        console.error("\nHouve um erro ao atualizar os dados! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });
            }

            else {

                // USUARIO NÃO ENCONTRADO, VAMOS INSERIR OS DADOS

                blackjackModel.pontuar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario)
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
                    "\nHouve um erro ao realizar ao verificar! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function resultadoJogo(req, res) {

    var id = req.params.idUsuario;

    blackjackModel.resultadoJogo(id)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("\nHouve um erro ao realizar verificar! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    pegar,
    resultadoJogo,
    pontuarOuAtualizar
}