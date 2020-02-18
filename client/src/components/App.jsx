import React from 'react';
import Main from './Main.jsx';
import SignUpLogin from './SignUpLogin.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      friends: [],
      playlist: [],
    };
  }

  componentDidMount() {
    console.log('Mounted!');
  }

  render() {
    const { user, friends, playlist } = this.state;
    return (
      <div>
        <h1>Shareaoke</h1>
        { user === '' ? <SignUpLogin /> : <Main playlist={playlist} friends={friends} /> }
      </div>
    );
  }
}

export default App;
