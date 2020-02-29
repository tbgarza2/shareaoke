import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './Main.jsx';
import SignUpLogin from './SignUpLogin.jsx';
import FriendsList from './FriendsList.jsx';
import Playlists from './Playlists.jsx';
import CreatePlaylist from './CreatePlaylist.jsx';
import Playlist from './Playlist.jsx';
import SearchForSongs from './SearchForSongs.jsx';
import Navbar from './Navbar.jsx';
import Player from './Player.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'tdog',
      friends: ['bubba', 'bull', 'will', 'chris', 'nas'],
      playlists: ['Awesome Beats', 'Classical', 'Birthday Party', 'Royal Wedding'],
    };
  }

  componentDidMount() {
    console.log('Mounted!');
  }

  render() {
    const { user, friends, playlists } = this.state;
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignUpLogin} />
          <Route exact path="/main" render={(routerProps) => (<Main {...routerProps} user={user} />)} />
          <Route exact path="/playlists" render={(routerProps) => (<Playlists {...routerProps} user={user} playlists={playlists} />)} />
          <Route exact path="/friends" render={(routerProps) => (<FriendsList {...routerProps} user={user} friends={friends} />)} />
          <Route exact path="/createplaylist" component={CreatePlaylist} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/search" component={SearchForSongs} />
          <Route exact path="/player" component={Player} />
        </Switch>
      </HashRouter>
    );
  }
}


export default App;
