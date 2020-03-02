/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlaylist: false,
      friendPlaylists: [],
    };
    this.handleShowPlaylists = this.handleShowPlaylists.bind(this);
  }

  componentDidMount() {
    this.setFriendsPlaylists();
  }

  setFriendsPlaylists() {
    const { friend } = this.props;
    axios.get(`/api/playlist/${friend.id}`)
      .then((p) => p.data)
      .then(playlists => {
        this.setState({
          friendPlaylists: playlists
        });
      })
      .catch((err) => console.error(err));
  }

  handleShowPlaylists() {
    const { showPlaylist } = this.state;
    this.setState({
      showPlaylist: !showPlaylist,
    });
  }

  render() {
    const { friend, remove } = this.props;
    const { showPlaylist, friendPlaylists } = this.state;
    return (
      <div>
        <div>{friend.username}</div>
        <button onClick={this.handleShowPlaylists}>See Playlists</button>
        <button onClick={() => remove(friend.id)}>Remove Friend</button>
        <div>{showPlaylist && friendPlaylists.map((playlist) => (<div key={playlist.id}>{playlist.name}</div>))}</div>
      </div>
    );
  }
}

export default Friend;
