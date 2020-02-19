import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const { user } = this.props;
    return (
      <div>
        <li><h5>Song1</h5></li>
        <li><h5>Song2</h5></li>
        <li><h5>Song3</h5></li>
      </div>
    );
  }
}

export default Songs;
