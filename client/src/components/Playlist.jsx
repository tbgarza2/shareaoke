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
      searchDisplay: false,
      playerDisplay: false,
    };

    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.searchSpotifyForSong = this.searchSpotifyForSong.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
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
  }

  handleSongNameChange(e) {
    this.setState({
      song: e.target.value,
    });
  }

  searchSpotifyForSong() {
    const { song, searchDisplay } = this.state;
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
        searchDisplay: !searchDisplay,
      }));
  }

  addSongToPlaylist(song) {
    const { songs } = this.state;

    this.setState({
      songs: songs.concat(song),
    });
  }

  displayClickedSong() {
    const { playerDisplay } = this.state;

    this.setState({
      playerDisplay: !playerDisplay,
    });
  }

  render() {
    const { currentPlaylist, song, songData, searchDisplay, playerDisplay } = this.state;
    const { description, token } = this.props.location.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        <div>
          Search for a song to add: <input value={song} onChange={this.handleSongNameChange} />
          <button onClick={this.searchSpotifyForSong} type="button">Search</button>
        </div>
        <div>
          {searchDisplay ? <SpotifyResults songData={songData} addSong={this.addSongToPlaylist} /> : null}
        </div>
        <Songs display={this.displayClickedSong} />
        {playerDisplay ?
          <h1>Display clicked song</h1>
          : null}
      </div>
    );
  }
}

export default Playlist;
