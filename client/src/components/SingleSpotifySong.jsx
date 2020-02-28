import React from 'react';

class SingleSpotifySong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.addSongToDatabase = this.addSongToDatabase.bind(this);
  }

  addSongToDatabase() {
    const { song, addSong } = this.props;
    const selectedPlaylist = document.getElementById('list').value;

    addSong({ song });
  }

  render() {
    const { song, playlists } = this.props;

    return (
      <div>
        <div>
          <img src={song.album.images[0].url} alt="" height="75" width="75" />
        </div>
        <div>
          {song.album.name} - {song.name} by {song.album.artists[0].name}
        </div>
        <button onClick={this.addSongToDatabase}>Add song to playlist</button>
        <select id="list">
          {playlists.map(playlist => (
            <option value={playlist.name}>{playlist.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SingleSpotifySong;
