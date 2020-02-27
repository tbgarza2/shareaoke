import React from 'react';
import axios from 'axios';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      userName: 'notinalready',
      playlistName: 'Astro World',
      description: 'travis scott mix',
      // friendName: '',
      // songs: [],
      // friends: [],
    };
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo(userName) {
    console.log('fetching user info');
    return axios
      .get(`/api/user/${userName}`)
      .then(userInfo => {
        console.log(userInfo);
        debugger;
        this.setState({
          userID: 0,
        });
        this.addPlaylist();
      })
      .catch(err => {
        console.log(err);
      });
  }

  createUser() {
    console.log('creating user');
    const { userName } = this.state;
    return axios
      .post(`/api/user/${userName}`)
      .then(userInfo => {
        console.log(userInfo.data);
        this.getUserInfo(userName);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePlaylistNameChange(e) {
    this.setState = ({
      playlistName: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState = ({
      playlistName: e.target.value,
    });
  }


  addPlaylist() {
    console.log('click');
    const { userID, playlistName, description } = this.state;
    console.log(userID);
    console.log(playlistName);
    console.log(description);
    return axios
      .post('/api/playlist', { userID, playlistName, description })
      .then(response => {
        console.log('added to database', response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { playlistName, description } = this.state;
    return (
      <div>
        Playlist Name<input value={playlistName} onChange={this.handlePlaylistNameChange} />
        Add Description<input value={description} onChange={this.handleDescriptionChange} />
        <button onClick={this.createUser}>Save</button>
      </div>
    );
  }
}

export default CreatePlaylist;
