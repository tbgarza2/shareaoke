import React from 'react';
import Friend from './Friend.jsx';


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h3>Friends</h3>
        {friends.map(friend => <Friend friend={friend} />)}
      </div>
    );
  }
}

export default FriendsList;
