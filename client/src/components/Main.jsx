import React from 'react';
import querystring from 'querystring';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_user: 0,
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
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        username: data.display_name,
      }))
      .then(() => {
        this.getUserInfo();
      });
  }

  getUserInfo() {
    const { username } = this.state;
    console.log('fetching user info');
    return axios
      .get(`/api/user/${username}`)
      .then(userInfo => {
        this.setState({
          id_user: userInfo.data[0].id,
        });
        console.log(id_user);
      })
      .catch(() => {
        this.createUser();
      });
  }

  createUser() {
    console.log('creating user');
    const { username } = this.state;
    return axios
      .post(`/api/user/${username}`)
      .then(userInfo => {
        this.setState({
          id_user: userInfo.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { username, token, id_user } = this.state;
    return (
      <div>
        <h1>{username}</h1>
        <ul>
          <li>
            <Link to={{ pathname: '/createplaylist', state: { username, token, id_user } }}>Create a playlist</Link>
          </li>
          <li>
            <Link to={{ pathname: '/playlists', state: { id_user } }}>Playlists</Link>
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
