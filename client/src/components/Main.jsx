import React from 'react';
import FriendsList from './FriendsList.jsx';
import Playlist from './Playlist.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { friends, playlists } = this.props;
    return (
      <div>
        <h1>shareaoke</h1>
        <Playlist playlists={playlists} />
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default Main;
