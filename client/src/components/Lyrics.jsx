import React from 'react';
import axios from 'axios';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: `${this.props.queryData.title} ${this.props.queryData.artist}`,
      lyrics: 'Show Lyircs',
    };
    // this.SongData = this.SongData.bind(this);
    this.Search = this.Search.bind(this);
  }

  Search() {
    const { query } = this.state;
    console.log(query);
    // this.setState({ lyrics: 'changed' });
    axios
      .get('/api/lyrics', {
        params: {
          query,
        },
      })
      .then(response => {
        // eslint-disable-next-line no-alert
        alert('Lyrics Received');
        console.log(response);
        this.setState({
          lyrics: response.data,
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-alert
        alert('No Lyrics Found');
        console.log(error);
      });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <div onClick={this.Search}>
        {lyrics}
      </div>
    );
  }
}


export default Lyrics;
