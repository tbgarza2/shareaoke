import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class PlaylistSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.playlist;

    axios.get(`/api/playlist/songs/${id}`)
      .then(data => this.setState({
        image: data.data[0].imageURL,
      }));
  }

  render() {
    const { playlist } = this.props;
    const { image } = this.state;

    return (
      <Card style={{ width: '15rem', height: '25rem', marginRight: 10, marginLeft: 10, border: 'black' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{playlist.name}</Card.Title>
          <Card.Text>{playlist.description}</Card.Text>
          <Button variant="success">
            <Link style={{ color: 'white' }} 
              to={{
                pathname: '/playlist',
                state: {
                  playlist,
                },
              }}
            > {playlist.name}
            </Link>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PlaylistSongs;
