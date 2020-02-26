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
    this.createPlaylist = this.createPlaylist.bind(this);
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

  handlePlaylistNameChange(e) {
    this.setState({
      playlistName: e.target.value,
    });
  }

  createPlaylist() { // redirect to playlist page and put all music adding stuff onto that page, git add and commit, try and make the video viewer page
    const { spotifyId, token } = this.props.location.state;
    const { playlistName } = this.state;

    const data = {
      name: playlistName,
      public: 'false',
      collaborative: 'true',
      description: 'string example',
    };

    fetch(`https://api.spotify.com/v1/users/${spotifyId}/playlists`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => console.log('Success:', responseData))
      .catch((error) => console.error('Error:', error));
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
          Enter a description: <textarea style={{ width: 300 }} onChange={this.handleDescriptionChange} />
        </div>
        <button onClick={this.createPlaylist} type="button">Create Playlist</button>
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

export default CreatePlaylist;
