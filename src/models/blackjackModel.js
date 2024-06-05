var database = require("../database/config");
function pontuar(qtdVencida, qtdPerdida, qtdEmpate, qtdTotal, idUsuario) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO blackjack (qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal) VALUES ('${qtdVencida}', '${qtdPerdida}', '${qtdEmpate}', '${qtdTotal}');
    `;
    
    var instrucaoSql2 = `
    SELECT idPartida from blackjack order by idPartida desc limit 1;
    `

    //console.log("Executando a instrução SQL: \n" + instrucaoSql +instrucaoSql2);
    database.executar(instrucaoSql).then(res => console.log('teste' + res.json()));
    return database.executar(instrucaoSql2);
}

function pegar(){
    var instrucaoSql = `
        SELECT qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal from blackjack;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pontuar,
    pegar
};