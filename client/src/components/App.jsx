import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('Mounted!');
  }

  render() {
    return (
      <div>
        <h1>shareaoke</h1>
      </div>
    );
  }
}

export default App;
