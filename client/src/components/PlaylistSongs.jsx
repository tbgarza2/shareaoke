import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { playlist } = this.props;
    return (
      <ul>
        <li>
          <Link to={{
            pathname: '/playlist',
            state: {
              playlist,
            },
          }}
          > {playlist}
          </Link>
        </li>
      </ul>
    );
  }
}

export default PlaylistSongs;
