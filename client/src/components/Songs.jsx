import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { display, song } = this.props;

    return (
      <div>
        <ul>
          <div>
            <img src={song.imageURL} alt="" height="75" width="75" />
          </div>
          <li onClick={display}>
            {song.title}
            {song.album} - {song.title} by {song.artist}
          </li>
        </ul>
      </div>
    );
  }
}

export default Songs;
