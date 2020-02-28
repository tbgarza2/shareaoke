import React from 'react';
import { Link } from 'react-router-dom';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      description: '',
    };
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handlePlaylistNameChange(e) {
    this.setState({
      playlistName: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    const { playlistName, description } = this.state;
    const { username, token } = this.props.location.state;

    return (
      <div>
        <h1>Create a new playlist</h1>
        <p>Start making a new playlist for your next Shareaoke party</p>
        <div>
          Playlist Name: <input value={playlistName} onChange={this.handlePlaylistNameChange} />
        </div>
        <div>
          Enter a description:
          <textarea
            style={{ width: 300 }} 
            value={description} 
            onChange={this.handleDescriptionChange}
          />
        </div>
        <Link to={{ pathname: '/playlist', state: { playlistName, description, username, token } }}>
          <button onClick={this.createPlaylist} type="button">Create Playlist</button>
        </Link>
      </div>
    );
  }
}

export default CreatePlaylist;
