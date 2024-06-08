create database redemption;
use redemption;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(30),
email varchar(50) unique,
senha varchar(40),
telefone char(11)
);

create table blackjack (
idPartida int primary key auto_increment,
qtdPartidasGanhas int,
qtdPartidasPerdidas int,
qtdPartidasEmpatadas int,
qtdPartidasTotal int default 10,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table personagem (
idIcone int auto_increment,
fkUsuario int,
primary key (idIcone, fkUsuario),
foreign key (fkUsuario) references usuario(idUsuario)
);

 SELECT usuario.nome, qtdPartidasGanhas, qtdPartidasPerdidas, qtdPartidasEmpatadas, qtdPartidasTotal 
 from blackjack join usuario on fkUsuario = idUsuario order by qtdPartidasGanhas desc;
 
 select * from blackjack where fkUsuario = 2;
 
 update blackjack set qtdPartidasGanhas = 3 and qtdPartidasPerdidas = and qtdPartidasEmpatadas = and qtdPartidasTotal = where fkUsuario = ;