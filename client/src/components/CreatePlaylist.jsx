import React from 'react';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      songs: [],
      friends: [],
    };
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
  }

  handlePlaylistNameChange(e) {
    this.setState = ({
      playlistName: e.target.value,
    });
  }

  render() {
    const { playlistName, songs, friends } = this.state;
    return (
      <div>
        Playlist Name<input value={playlistName} onChange={this.handlePlaylistNameChange} />
        Add Songs<input />
        Add Friends<input />
      </div>
    );
  }
}

export default CreatePlaylist;
