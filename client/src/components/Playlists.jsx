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

    return (
      <div>
        <h3>Playlists</h3>
        {playlists.map(playlist => <PlaylistSongs playlist={playlist} />)}
      </div>
    );
  }
}

export default Playlists;
