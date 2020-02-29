import React from 'react';
import Songs from './Songs.jsx';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: '',
      playerDisplay: false,
      description: '',
    };
    this.displayClickedSong = this.displayClickedSong.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state.playlist) {
      this.setState({
        currentPlaylist: this.props.location.state.playlist,
      });
    }

    if (this.props.location.state.playlistName) {
      this.setState({
        currentPlaylist: this.props.location.state.playlistName,
      });
    }

    if (this.props.location.state.description) {
      this.setState({
        description: this.props.location.state.description,
      });
    }
  }

  displayClickedSong() {
    const { playerDisplay } = this.state;

    this.setState({
      playerDisplay: !playerDisplay,
    });
  }

  render() {
    const { currentPlaylist, description, playerDisplay } = this.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        <Songs display={this.displayClickedSong} />
        {playerDisplay ?
          <iframe title="player" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
          : null}
      </div>
    );
  }
}

export default Playlist;
