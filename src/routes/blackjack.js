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

module.exports = router;

