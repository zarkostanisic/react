import React, {Component} from 'react';

class GoogleAuth extends Component{
  componentDidMount(){

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: '48339764555-l61k1cijotai7351p9m4i1smejm4q12s.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render(){
    return(
      <div>Google Auth</div>
    );
  }
}

export default GoogleAuth;
