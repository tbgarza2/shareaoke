import React from 'react';
import { Link } from 'react-router-dom';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // need to map over all of the songs on a different component later to make this dynamic
  // Wherever we are pulling the songs from the database

  render() {
    const { display } = this.props;

    return (
      <div>
        <ul>
          <li onClick={display}>
            Song 1
          </li>
        </ul>
      </div>
    );
  }
}

export default Songs;
