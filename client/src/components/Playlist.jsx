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
      uri: '',
      clickedSong: {},
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

  displayClickedSong(song) {
    const { playerDisplay } = this.state;
    const { uri } = song;

    this.setState({
      playerDisplay: true,
      uri: uri.replace('spotify:track:', ''),
      clickedSong: song,
    });
  }

  render() {
    const { currentPlaylist, description, playerDisplay, playlistSongs, uri } = this.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        {playlistSongs.map(song => <Songs key={song.id} song={song} display={this.displayClickedSong} />)}
        {playerDisplay ?
          <iframe title="player" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media" />
          : null}
      </div>
    );
  }
}

export default Playlist;
