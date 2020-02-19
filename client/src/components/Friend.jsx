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
        <li><div onClick={this.handleClick}>{friend}</div></li>
      </div>
    );
  }
}

export default Friend;
