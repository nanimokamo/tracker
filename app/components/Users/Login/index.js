import React from 'react';

import * as DB from 'database';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = ::this.login;
  }

  async login() {
    try {
      await DB.login();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.login}>Log in with Twitter</button>
      </div>
    );
  }
}

export default Login;
