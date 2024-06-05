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
qtdPartidasTotal int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table personagem (
idIcone int auto_increment,
fkUsuario int,
primary key (idIcone, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);
