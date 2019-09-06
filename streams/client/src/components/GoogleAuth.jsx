import React, {Component} from 'react';

class GoogleAuth extends Component{
  state = {
    isSignedIn: null
  }

  componentDidMount(){

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: '48339764555-bnecdmnhnlttu8o6srcs66pgij4hhitn.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton(){
    if(this.state.isSignedIn === null){
      return <div>I dont know if we are signed in</div>;
    }else if(this.state.isSignedIn === true){
      return(
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"/>
          Sign Out
        </button>
      );
    }else{
      return (
        <button className="ui blue google button" onClick={this.onSignIn}>
          <i className="google icon"/>
          Sign In with Google
        </button>
      );
    }
  }

  render(){
    return(
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
