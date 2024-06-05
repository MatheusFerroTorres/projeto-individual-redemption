-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database redemption;

use redemption;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(30),
email varchar(50),
senha varchar(40),
telefone char(11)
);

create table blackjack (
idPartida int primary key auto_increment,
qtdPartidasGanhas int,
qtdPartidasPerdidas int,
qtdPartidasEmpatadas int,
qtdPartidasTotal int
);

create table ranking (
idRankeado int auto_increment,
fkUsuario int,
fkPartida int,
    primary key (idRankeado, fkUsuario, fkPartida),
   foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkPartida) references blackjack(idPartida)
);