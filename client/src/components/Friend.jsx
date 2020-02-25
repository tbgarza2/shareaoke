import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { friend } = this.props;
    return (
      <ul>
        <li>{friend}</li>
      </ul>
    );
  }
}

export default Friend;
