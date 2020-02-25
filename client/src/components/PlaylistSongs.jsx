// import React from 'react';
// import Songs from './Songs.jsx';

// class PlaylistSongs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       display: !state.display,
//     }));
//   }

//   render() {
//     const { playlist } = this.props;
//     const { display } = this.state;
//     return (
//       <div>
//         <h4 key={playlist} onClick={this.handleClick}>{playlist}</h4>
//         { display ? <Songs /> : null}
//       </div>
//     );
//   }
// }

// export default PlaylistSongs;

import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { playlist } = this.props;
    return (
      <ul>
        <li>
          <Link to={{
            pathname: '/playlist',
            state: {
              playlist,
            },
          }}
          > {playlist}
          </Link>
        </li>
      </ul>
    );
  }
}

export default PlaylistSongs;
