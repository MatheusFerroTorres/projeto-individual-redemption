var express = require("express");
var router = express.Router();
var blackjackController = require("../controllers/blackjackController");


// POST ou PUT combinados em uma única rota

router.post("/pontuar-ou-atualizar", function (req, res) {
    blackjackController.pontuarOuAtualizar(req, res);
});


// Pegar todos os dados

router.get("/", function (req, res) {
    blackjackController.pegar(req, res);
});


// Pegar dado especifico de um usuario

router.get("/resultado/:idUsuario", function (req, res) {
    blackjackController.resultadoJogo(req, res);
});

module.exports = router;

