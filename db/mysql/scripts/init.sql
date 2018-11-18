CREATE DATABASE IF NOT EXISTS db_musicas;

USE db_musicas;

CREATE TABLE musicas (
	id_musica		INT 	  	 AUTO_INCREMENT,
	nome_musica		VARCHAR(255) NOT NULL,
	criador_musica	VARCHAR(255) NOT NULL,
	estilo_musica	VARCHAR(100) NOT NULL,
	id_playlist		INT 	 	 NOT NULL,
	PRIMARY KEY		(id_musica)
);