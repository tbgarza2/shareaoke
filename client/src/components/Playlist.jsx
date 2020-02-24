import React from 'react';
import Songs from './Songs.jsx';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { playlist } = this.props.location.state;
    return (
      <div>
        <h1>Hello</h1>
        <h3>{playlist}</h3>
        <Songs />
      </div>
    );
  }
}

export default Playlist;
