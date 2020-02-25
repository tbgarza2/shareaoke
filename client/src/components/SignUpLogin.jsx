import React from 'react';

class SignUpLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <h1>Welcome to Shareaoke! Please login with Spotify to continue.</h1>
        <a href="http://localhost:8080/spotify/login">
          <button>Login with Spotify</button>
        </a>
      </div>
    );
  }
}

export default SignUpLogin;
