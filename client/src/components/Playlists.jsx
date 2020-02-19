import React from 'react';
import PlaylistSongs from './PlaylistSongs.jsx';


class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { playlists } = this.props;
    return (
      <div>
        <h3>Playlists</h3>
        {playlists.map(playlist => <PlaylistSongs playlist={playlist} />)}
      </div>
    );
  }
}

export default Playlists;
