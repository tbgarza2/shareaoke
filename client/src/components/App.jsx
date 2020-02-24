import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './Main.jsx';
import SignUpLogin from './SignUpLogin.jsx';
import FriendsList from './FriendsList.jsx';
import Playlists from './Playlists.jsx';
import CreatePlaylist from './CreatePlaylist.jsx';


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
        <Switch>
          <Route exact path="/" component={SignUpLogin} />
          <Route path="/main" render={(routerProps) => (<Main {...routerProps} user={user} />)} />
          <Route path="/playlists" render={(routerProps) => (<Playlists {...routerProps} user={user} playlists={playlists} />)} />
          <Route path="/friends" render={(routerProps) => (<FriendsList {...routerProps} user={user} friends={friends} />)} />
          <Route exact path="/createplaylist" component={CreatePlaylist} />
        </Switch>
      </HashRouter>
    );
  }
}


export default App;
