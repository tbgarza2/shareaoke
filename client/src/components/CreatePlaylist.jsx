import React from 'react';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        Playlist Name<input user={user} />
        Add Songs<input />
        Add Friends
      </div>
    );
  }
}

export default CreatePlaylist;
