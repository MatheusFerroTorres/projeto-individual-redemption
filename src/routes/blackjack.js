var express = require("express");
var router = express.Router();
var blackjackController = require("../controllers/blackjackController");


router.post("/", function (req, res) {

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
    blackjackController.pontuar(req, res);
});

router.get("/", function (req, res) {

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
    blackjackController.pegar(req, res);
});

router.get("/resultado/:idUsuario", function (req, res) {

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
    blackjackController.verificar(req, res);
});

router.put("/atualizar/:idUsuario", function (req, res) {

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
    blackjackController.atualizar(req, res);
});

module.exports = router;

