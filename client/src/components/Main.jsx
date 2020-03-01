import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    const { username, token, id_user } = this.props;
    return (
      <div>
        <h1>{username}</h1>
        <ul>
          <li>
            <Link to={{ pathname: '/createplaylist', state: { username, token, id_user } }}>Create a playlist</Link>
          </li>
          <li>
            <Link to={{ pathname: '/playlists', state: { username, id_user } }}>Playlists</Link>
          </li>
          <li>
            <Link to={{ pathname: '/friends', state: { username, id_user } }}>Friends</Link>
          </li>
          <li>
            <Link to={{ pathname: '/search', state: { username, id_user } }}>Search for songs to add to a playlist</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
