/* eslint-disable max-len */
import React from 'react';

class FriendsList extends React.Component {
  setFriends(title, users, buttonMessage, buttonFunction, buttonMessage2, buttonFunction2, message) {
    return (
      <div>
        <h3>{title}</h3>
        {!users.length && <h5>{message}</h5>}
        {!!users.length
          && (
            <div>
              {users.map((user) => {
                return (
                  <div key={user.id}>
                    <div>{user.username}</div>
                    <button onClick={() => buttonFunction(user.id)}>{buttonMessage}</button>
                    {buttonMessage2 && <button onClick={() => buttonFunction2(user.id)}>{buttonMessage2}</button>}
                  </div>
                );
              })}
            </div>
          )
        }
      </div>
    );
  }

  render() {
    const {
      friends,
      received,
      sent,
      accept,
      remove,
    } = this.props;

    const friendsMessage = 'Nope. No friends here';
    const receivedMessage = 'No received requests pending';
    const sentMessage = 'No sent requests pending.';
    return (
      <div>
        <div>{this.setFriends('Friends', friends, 'See Playlists', null, 'Remove Friend', remove, friendsMessage)}</div>
        <div>{this.setFriends('Received', received, 'Accept', accept, 'Decline', remove, receivedMessage)}</div>
        <div>{this.setFriends('Sent', sent, 'Cancel', remove, null, null, sentMessage)}</div>
      </div>
    );
  }
}

export default FriendsList;
