import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      description: '',
    };
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
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

  addPlaylist() {
    const { playlistName, description } = this.state;
    const { id_user } = this.props;
    return axios
      .post('/api/playlist', { id_user, playlistName, description })
      .then(response => {
        console.log('added to database', response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { playlistName, description } = this.state;
    const { username, token } = this.props;
    return (
      <div>
        <div style={{ background: 'orange', marginLeft: 150, marginRight: 150, padding: 0, height: 65 }}>
          <h1 style={{ fontSize: 30, color: 'white', marginLeft: 40, textAlign: 'center' }}>Create a new playlist</h1>
        </div>
        <div style={{ height: 1200, background: '#ebeef2', marginLeft: 150, marginRight: 150, paddingTop: 20 }}>
          <div>
            <div>
              <h5 style={{ marginLeft: 100, color: '#00692d' }}>Enter a playlist name</h5>
              <div style={{ marginLeft: 100, marginBottom: 10 }}>
                <input style={{ border: '2px solid green', outline: 'none' }} placeholder="name" value={playlistName} onChange={this.handlePlaylistNameChange} />
              </div>
            </div>
            <div>
              <h5 style={{ marginLeft: 100, color: '#00692d' }}>Enter a playlist description</h5>
              <div style={{ marginLeft: 100, marginBottom: 10 }}>
                <textarea
                  placeholder="description"
                  style={{ width: 300, border: '2px solid green', outline: 'none' }}
                  value={description}
                  onChange={this.handleDescriptionChange}
                />
              </div>
            </div>
            <Link to={{
              pathname: '/search',
              state: {
                playlistName, description, username, token,
              },
            }}
            >
              <Button style={{ marginLeft: 100 }} variant="success" onClick={this.addPlaylist} type="button">Create Playlist</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
