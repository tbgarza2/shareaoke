import React from 'react';
import SingleSpotifySong from './SingleSpotifySong.jsx';

class SpotifyResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { songData, addSong, playlists } = this.props;

    return (
      <div>
        <ul>
          {songData.map(song => (
            <SingleSpotifySong playlists={playlists} song={song} key={song.id} addSong={addSong} />
          ))}
        </ul>
      </div>
    );
  }
}

export default SpotifyResults;
