import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

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
        <ListGroup>
          <ListGroup.Item onClick={this.passUpUriAndPlaySong}>
            <Image src={song.imageURL} alt="" height="50" width="50" roundedCircle="true" />
            {`  ${song.title} by ${song.artist}`}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Songs;
