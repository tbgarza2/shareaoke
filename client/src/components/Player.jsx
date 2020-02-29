import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Player</h1>
        <iframe
          title="player"
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
    );
  }
}

export default Player;
