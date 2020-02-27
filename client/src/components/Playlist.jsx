import React from 'react';
import Songs from './Songs.jsx';
import SpotifyResults from './SpotifyResults.jsx';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: '',
      song: '',
      songs: [],
      songData: [],
      display: false,
    };

    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.searchSpotifyForSong = this.searchSpotifyForSong.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
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
  }

  handleSongNameChange(e) {
    this.setState({
      song: e.target.value,
    });
  }

  searchSpotifyForSong() {
    const { song, display } = this.state;
    let songQuery = song.split(' ').join('%20');

    const { token } = this.props.location.state;

    fetch(`https://api.spotify.com/v1/search?q=${songQuery}&type=track&market=US&limit=10`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        songData: data.tracks.items,
        display: !display,
      }));
  }

  addSongToPlaylist(song) {
    const { songs } = this.state;

    this.setState({
      songs: songs.concat(song),
    });
  }

  render() {
    const { currentPlaylist, song, songData, display } = this.state;
    const { description } = this.props.location.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        <Songs />
        <div>
          Search for a song: <input value={song} onChange={this.handleSongNameChange} />
          <button onClick={this.searchSpotifyForSong} type="button">Search for song</button>
        </div>
        <div>
          {display ? <SpotifyResults songData={songData} addSong={this.addSongToPlaylist} /> : null}
        </div>
      </div>
    );
  }
}

export default Playlist;
