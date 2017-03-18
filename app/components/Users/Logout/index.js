import React from 'react';

import * as DB from 'database';

class Logout extends React.Component {
  componentDidMount() {
    this.logout();
  }

  async logout() {
    try {
      await DB.logout();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <div>Logging out...</div>;
  }
}

export default Logout;
