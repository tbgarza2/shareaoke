/* eslint-disable func-names */
import React from 'react';
import axios from 'axios';
import Songs from './Songs.jsx';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: '',
      playerDisplay: false,
      description: '',
      playlistId: 0,
      playlistSongs: [],
    };
    this.displayClickedSong = this.displayClickedSong.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state.playlist) {
      this.setState({
        currentPlaylist: this.props.location.state.playlist.name,
        description: this.props.location.state.playlist.description,
        playlistId: this.props.location.state.playlist.id,
      }, () => {
        this.getSongs();
      });
    }
  }

  getSongs() {
    const { playlistId } = this.state;

    axios.get(`/api/playlist/songs/${playlistId}`)
      .then(data => this.setState({
        playlistSongs: data.data,
      }));
  }

  displayClickedSong() {
    const { playerDisplay } = this.state;

    this.setState({
      playerDisplay: !playerDisplay,
    });
  }

  render() {
    const { currentPlaylist, description, playerDisplay, playlistSongs } = this.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        {playlistSongs.map(song => <Songs key={song.id} song={song} display={this.displayClickedSong} />)}
        {playerDisplay ?
          <h1>Display clicked song</h1>
          : null}
      </div>
    );
  }
}

export default Playlist;
