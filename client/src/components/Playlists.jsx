import React from 'react';
import axios from 'axios';
import PlaylistSongs from './PlaylistSongs.jsx';


class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }

  componentDidMount() {
    const { id_user } = this.props.location.state;

    axios.get(`/api/playlist/${id_user}`)
      .then(playlists => this.setState({ playlists: playlists.data }))
      .catch(err => console.error(err));
  }


  render() {
    const { playlists } = this.state;
    const { username } = this.props.location.state;

    return (
      <div>
        <div style={{ background: 'orange', marginLeft: 150, marginRight: 150, padding: 0, height: 65 }}>
          <h3 style={{ fontSize: 50, color: 'white', marginLeft: 35 }}>{`${username}'s playlists`}</h3>
        </div>
        <div style={{ height: 600, background: '#ebeef2', marginLeft: 150, marginRight: 150, paddingTop: 20, display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
          {playlists.map(playlist => <PlaylistSongs playlist={playlist} />)}
        </div>
      </div>
    );
  }
}

export default Playlists;
