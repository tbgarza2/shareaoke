import React from 'react';
import SpotifyResults from './SpotifyResults.jsx';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      song: '',
      songs: [],
      songData: [],
      display: false,
    };
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.searchSpotifyForSong = this.searchSpotifyForSong.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }

  handlePlaylistNameChange(e) {
    this.setState({
      playlistName: e.target.value,
    });
  }

  handleSongNameChange(e) {
    this.setState({
      song: e.target.value,
    });
  }

  searchSpotifyForSong() {
    const { song, display } = this.state;
    let songQuery = song.split(' ').join('%20');

    const token = 'BQBb55OmRMZlIug4TakVfhX8k_rzOxywzELz8tyVs20HFoPhRCDMOUkzYa4q4GylTtO4lMicqrS3_Am-rm2-IhsLNOuOEEVHJDSgQ9ZsXwv-JGaX7bC2mX4dKAG8eInZHlkTJIVtYq_gpU7D-eiW2TEdCOL5LqA';
    // Need to update later to make dyanmic and pull from App.jsx

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

  createPlaylist() {
  }

  render() {
    const { playlistName, song, display, songData } = this.state;

    return (
      <div>
        <h1>Create a new playlist</h1>
        <p>Start making a new playlist for your next Shareaoke party</p>
        <div>
          Playlist Name: <input value={playlistName} onChange={this.handlePlaylistNameChange} />
        </div>
        <div>
          Search for a song: <input value={song} onChange={this.handleSongNameChange} />
          <button onClick={this.searchSpotifyForSong} type="button">Search for song</button>
        </div>
        <div>
          {display ? <SpotifyResults songData={songData} addSong={this.addSongToPlaylist} /> : null}
        </div>
        <button onClick={this.createPlaylist} type="button">Make Playlist</button>
      </div>
    );
  }
}

export default CreatePlaylist;
