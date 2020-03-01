import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import SpotifyResults from './SpotifyResults.jsx';

class SearchForSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      songData: [],
      searchDisplay: false,
      token: '',
      playlists: [],
      songId: 0,
      playlistId: 0,
    };
    this.handleSongNameChange = this.handleSongNameChange.bind(this);
    this.searchSpotifyForSong = this.searchSpotifyForSong.bind(this);
    this.addSongToDatabase = this.addSongToDatabase.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      const { username } = this.props;
      axios.get(`/api/user/${username}`)
        .then((data) => axios.get(`/api/playlist/${data.data[0].id}`)
          .then(playlists => this.setState({ playlists: playlists.data })))
        .catch(err => console.error(err));
    }, 125);
  }

  handleSongNameChange(e) {
    this.setState({
      song: e.target.value,
    });
  }

  searchSpotifyForSong() {
    const { song, searchDisplay } = this.state;
    const songQuery = encodeURIComponent(song);

    const { token } = this.props;
    console.log(token);
    fetch(`https://api.spotify.com/v1/search?q=${songQuery}&type=track&market=US&limit=10`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          songData: data.tracks.items,
          searchDisplay: !searchDisplay,
        });
      });
  }

  addSongToDatabase({ song }, selectedPlaylist) {
    const title = song.name;
    const album = song.album.name;
    const artist = song.album.artists[0].name;
    const imageURL = song.album.images[0].url;
    const uri = song.uri;

    const { playlists } = this.state;

    const correctPlaylist = playlists.filter(e => e.name === selectedPlaylist);
    const correctPlaylistId = correctPlaylist[0].id;

    return axios
      .post('/api/song', { title, album, artist, imageURL, uri })
      .then(axios.get(`/api/song/${title}`)
        .then(data => this.setState({ songId: data.data[0].id }))
        .then(() => this.setState({ playlistId: correctPlaylistId }))
        .then(() => this.addSongToPlaylist()))
      .catch(err => console.error(err));
  }

  addSongToPlaylist() {
    const { playlistId, songId } = this.state;

    return axios
      .post(`/api/playlist/${playlistId}/${songId}`)
      .then(response => console.log('Added song to playlist!', response))
      .catch(err => console.error(err));
  }

  render() {
    const { song, songData, searchDisplay, playlists } = this.state;
    return (
      <div>
        <div style={{ background: 'orange', marginLeft: 150, marginRight: 150, padding: 0, height: 65 }}>
          <h3 style={{ fontSize: 30, color: 'white', marginLeft: 35, textAlign: 'center' }}>Add songs to your playlists</h3>
        </div>
        <div style={{ height: 600, background: '#ebeef2', marginLeft: 150, marginRight: 150, paddingTop: 20 }}>
          <div>
            Search for a song to add: <input style={{ border: '2px solid green', outline: 'none', marginRight: 5 }} value={song} onChange={this.handleSongNameChange} />
            <Button variant="success" size="sm" onClick={this.searchSpotifyForSong} type="button">Search</Button>
          </div>
          <div>
            {searchDisplay ? <SpotifyResults playlists={playlists} songData={songData} addSong={this.addSongToDatabase} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForSongs;
