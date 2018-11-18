module.exports = {
  playlists: {
  	findAll: 'SELECT * FROM playlists',
  	insert:  'INSERT INTO playlists(nome_playlist, estilo_playlist, obs_playlist) VALUES($1, $2, $3) RETURNING id_playlist',
  	update:  'UPDATE playlists SET nome_playlist = $1, estilo_playlist = $2, obs_playlist = $3 WHERE id_playlist = $4',
  	delete:  'DELETE FROM playlists WHERE id_playlist = $1'
  }
}