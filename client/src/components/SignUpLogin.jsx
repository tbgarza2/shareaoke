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
        <h2>Shareaoke Sign Up </h2>
        Username<input /><button>Sign Up</button>
        <h2>Shareaoke Login </h2>
        Username<input /><button>Login</button>
      </div>
    );
  }
}

export default SignUpLogin;
