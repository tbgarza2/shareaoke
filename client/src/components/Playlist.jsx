import React from 'react';
import Songs from './Songs.jsx';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlaylist: '',
    };
  }

  componentDidMount() {
    if (this.props.location.state.playlist) {
      this.setState({
        currentPlaylist: this.props.location.state.playlist,
      });
    }

    if (this.props.location.state.playlistName) {
      this.setState({
        currentPlaylist: this.props.location.state.playlistName,
      });
    }
  }

  render() {
    const { currentPlaylist } = this.state;
    const { description } = this.props.location.state;

    return (
      <div>
        <h3>{currentPlaylist}</h3>
        <p>{description}</p>
        <Songs />
      </div>
    );
  }
}

export default Playlist;
