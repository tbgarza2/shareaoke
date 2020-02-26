import React from 'react';
import SingleSpotifySong from './SingleSpotifySong.jsx';

class SpotifyResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { songData } = this.props;
    return (
      <div>
        <ul>
          {songData.map(song => (
            <SingleSpotifySong song={song} key={song.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default SpotifyResults;
