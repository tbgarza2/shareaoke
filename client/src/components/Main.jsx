import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { user, friends, playlists } = this.props;
    return (
      <div>
        <h1>{user}</h1>
        <ul>
          <li>
            <Link to="/createplaylist">Create a playlist</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
