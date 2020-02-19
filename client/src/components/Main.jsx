import React from 'react';
import FriendsList from './FriendsList.jsx';
import Playlists from './Playlists.jsx';
import CreatePlaylist from './CreatePlaylist.jsx';

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
        <CreatePlaylist user={user} />
        <Playlists playlists={playlists} />
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default Main;
