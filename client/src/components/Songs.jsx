import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.passUpUriAndPlaySong = this.passUpUriAndPlaySong.bind(this);
  }

  passUpUriAndPlaySong() {
    const { display, song } = this.props;

    display(song);
  }

  render() {
    const { song } = this.props;

    return (
      <div>
        <ul>
          <div>
            <img src={song.imageURL} alt="" height="75" width="75" />
          </div>
          <li onClick={this.passUpUriAndPlaySong}>
            {song.title}
            {song.album} - {song.title} by {song.artist}
          </li>
        </ul>
      </div>
    );
  }
}

export default Songs;
