var express = require('express');
var router = express.Router({mergeParams: true});

const db = require('../db/mysql/mysql');
const sql = require('../db/mysql/sql');

router.route('/')
	/* Get all musicas from a playlist */
	.get(function(req, res, next) {
		db.query(
			sql.musicas.findByPlaylistId, 
			req.params['id_playlist'], 
			(error, results) => {
				if (error) res.status(500).json(error);	
				else       res.status(200).json(results);			
			}
		);
	})
	/* Add musica */
	.post(function(req, res, next) {
		var params = [
			req.body['nome_musica'], 
			req.body['criador_musica'], 
			req.body['estilo_musica'], 
			req.params['id_playlist']
		];
		db.query(
			sql.musicas.insert, 
			params, 
			(error, results) => {
				if (error) res.status(500).json(error);
				else       res.status(201).json(results.insertId);
			}
		);
	});

router.route('/:id')
	/* Update musica */
	.put(function(req, res, next) {
		var params = [
			req.body['nome_musica'], 
			req.body['criador_musica'], 
			req.body['estilo_musica'], 
			req.params['id_playlist'],
			req.params['id']
		];
		db.query(
			sql.musicas.update, 
			params, 
			(error, results) => {
				if (error) res.status(500).json(error);
				else       res.status(200).json(req.params['id']);
			}
		);
	})
	/* Remove musica */
	.delete(function(req, res, next) {
		db.query(
			sql.musicas.delete, 
			[req.params['id_playlist'], req.params['id']], 
			(error, results) => {
				if (error) res.status(500).json(error);
				else       res.status(200).json(req.params['id']);
			}
		);
	});

module.exports = router;