-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

-- Criação do banco de dados
create database redemption;
use redemption;

-- Tabela de usuários
create table usuario (
    idUsuario int primary key auto_increment,
    nome varchar(30),
    email varchar(50) unique,
    senha varchar(40),
    telefone char(11)
);

-- Tabela de partidas de Blackjack
create table blackjack (
    idPartida int primary key auto_increment,
    qtdPartidasGanhas int,
    qtdPartidasPerdidas int,
    qtdPartidasEmpatadas int,
    qtdPartidasTotal int default 10,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);

-- Tabela de conquistas
create table conquistas (
    idConquista int,
    nome varchar(50),
    descricao text,
    fkUsuario int,
    primary key (fkUsuario, idConquista),
    foreign key (fkUsuario) references usuario(idUsuario)
);

-- Inserir usuário na tabela usuario
insert into usuario (nome, email, senha, telefone) 
values ('Matheus Ferro', 'matheus.torres@sptech.school', 'Mft102005', '11943008452');

-- Inserir registro na tabela blackjack
insert into blackjack (qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, fkUsuario) 
values (8, 1, 1, 1);

-- inserir dados na tabela conquistas
insert into conquistas (idConquista, nome, descricao, fkUsuario) 
values (1, 'Primeiro Lugar', 'O jogador ficou em primeiro lugar no ranking', 1);

-- Select de exemplo tabela conquista
select 
    usuario.idusuario,
    usuario.nome as nome_usuario,
    conquistas.nome as nome_conquista,
    conquistas.descricao
from 
    usuario
join 
    conquistas on usuario.idusuario = conquistas.fkusuario;