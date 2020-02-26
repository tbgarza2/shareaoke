import React from 'react';
import querystring from 'querystring';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      spotifyId: '',
    };
  }

  componentDidMount() {
    const parsedToken = querystring.parse(window.location.hash);
    const token = parsedToken['#/main/#access_token'];

    this.setState({
      token,
    });

    fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        spotifyId: data.display_name,
      }));
  }

  render() {
    const { spotifyId, token } = this.state;
    return (
      <div>
        <h1>{spotifyId}</h1>
        <ul>
          <li>
            <Link to={{ pathname: '/createplaylist', state: { spotifyId, token } }}>Create a playlist</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
