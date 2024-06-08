var database = require("../database/config");

function pontuar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO blackjack (qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal, fkUsuario) VALUES ('${qtdVencida}', '${qtdPerdida}', '${qtdEmpate}', '${qtdTotal}', ${idUsuario});
    `;

    var instrucaoSql2 = `
    SELECT idPartida from blackjack order by idPartida desc limit 1;
    `

    database.executar(instrucaoSql)
    return database.executar(instrucaoSql2);
}

function pegar() {
    var instrucaoSql = `
        SELECT usuario.nome, qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal from blackjack join usuario on fkUsuario = idUsuario order by qtdPartidasGanhas desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(VitoriaAtual, DerrotaAtual, EmpateAtual, Usuario) {
    var instrucaoSql = `
         update blackjack set qtdPartidasGanhas = ${VitoriaAtual} and qtdPartidasPerdidas = ${DerrotaAtual} and qtdPartidasEmpatadas = ${EmpateAtual} where fkUsuario = ${Usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificar(idUsuario) {
    const instrucaoSql = 
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
    verificar
};