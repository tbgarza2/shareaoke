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
    return (
      <div>
        <ul>
          <li>
            <Link to="/Player">Song 1</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Songs;
