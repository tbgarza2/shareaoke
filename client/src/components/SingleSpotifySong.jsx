import React from 'react';

class SingleSpotifySong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }

  addSongToPlaylist() {
    const { song, addSong } = this.props;

    addSong({ song });
  }

  render() {
    const { song } = this.props;
    return (
      <div>
        <div>
          <img src={song.album.images[0].url} alt="" height="75" width="75" />
        </div>
        <div>
          {song.album.name} - {song.name} by {song.album.artists[0].name}
        </div>
        <button onClick={this.addSongToPlaylist}>Add song to playlist</button>
      </div>
    );
  }
}

export default SingleSpotifySong;
