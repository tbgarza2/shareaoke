import React from 'react';

class SignUpLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    // const url = 'localhost:8080' || 'team4ahalfstar.appspot.com';
    return (
      <div>
        <h1>Welcome to Shareaoke! Please login with Spotify to continue.</h1>
        <a href="http://team4ahalfstar.appspot.com/spotify/login">
          <button>Login with Spotify</button>
        </a>
      </div>
    );
  }
}

export default SignUpLogin;
