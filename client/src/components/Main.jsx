import React from 'react';
import querystring from 'querystring';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      username: '',
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
        username: data.display_name,
      }));
  }

  render() {
    const { username, token } = this.state;
    return (
      <div>
        <h1>{username}</h1>
        <ul>
          <li>
            <Link to={{ pathname: '/createplaylist', state: { username, token } }}>Create a playlist</Link>
          </li>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to={{ pathname: '/search', state: { username } }}>Search for songs to add to a playlist</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
