var express = require('express');
var router = express.Router();

const db = require('../db/postgres/postgres')
const sql = require('../db/postgres/sql')

router.use('/:id_playlist/musicas', require('./musicas'));

router.route('/')
	/* Get all playlists */
	.get(function(req, res, next) {
		db.query(
			sql.playlists.findAll, 
			(error, result) => {
				if (error) res.status(500).json(error);
				else       res.status(200).json(result.rows);			
			}
		);
	})
	/* Add playlist */
	.post(function(req, res, next) {
		var params = [
			req.body['nome_playlist'], 
			req.body['estilo_playlist'], 
			req.body['obs_playlist']
		];
		db.query(
			sql.playlists.insert,
			params,
			(error, result) => {
				if (error) res.status(500).json(error);
				else       res.status(201).json(result.rows[0].id_playlist);
			}
		);
	});

router.route('/:id')
	/* Update playlist */
	.put(function(req, res, next) {
		var params = [
			req.body['nome_playlist'], 
			req.body['estilo_playlist'], 
			req.body['obs_playlist'], 
			req.params['id']
		];
		db.query(
			sql.playlists.update, 
			params, 
			(error, result) => {
				if (error) res.status(500).json(error);
				else       res.status(200).json(req.params['id']);
			}
		);
	})
	/* Remove playlist */
	.delete(function(req, res, next) {
		db.query(
			sql.playlists.delete, 
			[req.params['id']], 
			(error, result) => {
				if (error) res.status(500).json(error);
				else       res.status(200).json(req.params['id']);
			}
		);
	});

module.exports = router;