import React from 'react';

class SearchBar extends React.Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //       term: ''
  //   };
  //
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  state = {
    term: ''
  };

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }
  //
  // onInputClick = () => {
  //   console.log('Input was clicked');
  // }

  // onFormSubmit(event){
  //   event.preventDefault();
  //
  //   console.log(this.state.term);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term);
  }
}

export default SearchBar;
