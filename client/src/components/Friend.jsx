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
      <div>
        <li>{friend}</li>
      </div>
    );
  }
}

export default Friend;
