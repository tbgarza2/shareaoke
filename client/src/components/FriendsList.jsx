import React from 'react';
import Friend from './Friend.jsx';


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      display: !state.display,
    }))
  }

  render() {
    const { friends } = this.props;
    const { display } = this.state;
    return (
      <div>
        <h3 onClick={this.handleClick}>Friends</h3>
        {display ? friends.map(friend => <Friend friend={friend} key={friend} />) : null}
      </div>
    );
  }
}

export default FriendsList;
