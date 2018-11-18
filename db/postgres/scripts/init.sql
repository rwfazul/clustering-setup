CREATE DATABASE db_playlists;

\c db_playlists

CREATE TABLE playlists (
	id_playlist			SERIAL 	  	 NOT NULL,
	nome_playlist		VARCHAR(255) NOT NULL,
	estilo_playlist		VARCHAR(100) NOT NULL,
	obs_playlist		VARCHAR(250) NOT NULL,
	PRIMARY KEY			(id_playlist)
);