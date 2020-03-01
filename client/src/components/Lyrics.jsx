import React from 'react';
import axios from 'axios';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: `${this.props.queryData.title} ${this.props.queryData.artist}`,
      lyrics: 'Show Lyircs',
    };
    this.SongData = this.SongData.bind(this);
    this.Search = this.Search.bind(this);
  }

  Search() {
    const { query } = this.state;
    console.log(query);
    axios.get(`/getmusic/${query}`, (data) => {
      // eslint-disable-next-line no-alert
      alert('Data Received');
      console.log(data);
      if (data.length < 3) {
        // eslint-disable-next-line no-alert
        alert('No Lyrics Found');
      } else {
        this.setState({
          lyrics: data,
        });
      }
    });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <div onClick={this.SongData}>
        {lyrics}
      </div>
    );
  }
}


export default Lyrics;
