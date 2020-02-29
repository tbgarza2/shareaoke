import React from 'react';
// import Spotify from 'spotify';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // onSpotifyWebPlaybackSDKReady() {
  //   const token = 'BQAwLiRgHlSztMOMP9n6Y58XaoJGQZrdaZQSN0T3gju_88alcVxq2hXU2mpHBhcJYH6ESR-jwgY9Oxo6WHT-ym6VAZQ4IWaoNjJjLmCykijT0eQAySXzx7BdYMnHnVESZCM-07jTtuT64Mq8qABH5CRLbniAJKgdRmUX7iaSQM-KujHwVsk';
  //   const player = new Spotify.Player({
  //     name: 'Web Playback SDK Quick Start Player',
  //     getOAuthToken: cb => { cb(token); },
  //   });
  //   // Error handling
  //   player.addListener('initialization_error', ({ message }) => console.error(message));
  //   player.addListener('authentication_error', ({ message }) => console.error(message));
  //   player.addListener('account_error', ({ message }) => console.error(message));
  //   player.addListener('playback_error', ({ message }) => console.error(message));

  //   // Playback status updates
  //   player.addListener('player_state_changed', state => console.log(state));

  //   // Ready
  //   player.addListener('ready', ({ device_id }) => console.log('Ready with Device ID', device_id));

  //   // Not Ready
  //   player.addListener('not_ready', ({ device_id }) => console.log('Device ID has gone offline', device_id));

  //   // Connect to the player!
  //   player.connect();
  // }

  render() {
    return (
      <div>
        <h1>Player</h1>
        {/* {this.onSpotifyWebPlaybackSDKReady.bind(this)} */}
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
