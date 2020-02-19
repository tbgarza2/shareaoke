import React from 'react';
import Main from './Main.jsx';
import SignUpLogin from './SignUpLogin.jsx';

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
      <div>
        <h1>Shareaoke</h1>
        { user === '' ? <SignUpLogin /> : <Main playlists={playlists} friends={friends} /> }
      </div>
    );
  }
}

export default App;
