var database = require("../database/config");

// INSERT

function pontuar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario) {

    qtdTotal = qtdEmpate + qtdPerdida + qtdVencida;

    var instrucaoSql =
        `
        INSERT INTO blackjack (qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal, fkUsuario) VALUES 
        ('${qtdVencida}', '${qtdPerdida}', '${qtdEmpate}', '${qtdTotal}', ${idUsuario});
    `;

    var instrucaoSql2 = `
    SELECT idPartida from blackjack order by idPartida desc limit 1;
    `

    database.executar(instrucaoSql)
    return database.executar(instrucaoSql2);
}

// UPDATE

function atualizar(VitoriaAtual, DerrotaAtual, EmpateAtual, qtdTotal, idUsuario) {

    qtdTotal = VitoriaAtual + DerrotaAtual + EmpateAtual;

    var instrucaoSql =
    `
         UPDATE blackjack 
         SET qtdPartidasGanhas = ${VitoriaAtual}, 
             qtdPartidasPerdidas = ${DerrotaAtual}, 
             qtdPartidasEmpatadas = ${EmpateAtual},
             qtdPartidasTotal = ${qtdTotal}
             where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// SELECT

function verificarUsuario(idUsuario) {

    var instrucaoSql = `SELECT * FROM blackjack WHERE fkUsuario = ${idUsuario};`;

    return database.executar(instrucaoSql);

}



function pegar() {
    var instrucaoSql = `
        SELECT usuario.nome, qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal from blackjack join usuario on fkUsuario = idUsuario order by qtdPartidasGanhas desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultadoJogo(idUsuario) {
    var instrucaoSql =
        `
        SELECT qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas FROM blackjack WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pontuar,
    pegar,
    atualizar,
    resultadoJogo,
    verificarUsuario
};