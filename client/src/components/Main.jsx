import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  render() {
    const { username, token, id_user } = this.props;
    const { id } = this.state;
    return (
      <div>
        <h1>{username}</h1>
        <ul>
          <li>
            <Link to={{ pathname: '/createplaylist', state: { id, username, token, id_user } }}>Create a playlist</Link>
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
