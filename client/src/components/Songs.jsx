import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>Song1</li>
          <li>Song2</li>
          <li>Song3</li>
        </ul>
      </div>
    );
  }
}

export default Songs;
