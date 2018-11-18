module.exports = {
  musicas: {
  	findByPlaylistId: 'SELECT * FROM musicas WHERE id_playlist = ?',
  	insert: 'INSERT INTO musicas(nome_musica, criador_musica, estilo_musica, id_playlist) VALUES(?, ?, ?, ?)',
  	update: 'UPDATE musicas SET nome_musica = ?, criador_musica = ?, estilo_musica = ? WHERE id_playlist = ? AND id_musica = ?',
  	delete: 'DELETE FROM musicas WHERE id_playlist = ? AND id_musica = ?'
  }
}