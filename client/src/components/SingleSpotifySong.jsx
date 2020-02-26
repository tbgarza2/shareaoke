import React from 'react';

class SingleSpotifySong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }

  addSongToPlaylist() {
    const { song } = this.props;

  }

  render() {
    const { song } = this.props;
    return (
      <div onClick={this.addSongToPlaylist}>
        <div>
          <img src={song.album.images[0].url} alt="" height="75" width="75" />
        </div>
        <div>
          {song.album.name} - {song.name} by {song.album.artists[0].name}
        </div>
      </div>
    );
  }
}

export default SingleSpotifySong;
