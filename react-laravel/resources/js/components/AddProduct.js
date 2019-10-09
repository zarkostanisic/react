import React, { Component } from 'react';

class AddProduct extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      newProduct: {
        title: '',
        description: '',
        price: 0,
        availability: 0
      }
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(key, e){
    var state = Object.assign({}, this.state.newProduct);
    state[key] = e.target.value;
    
    this.setState({newProduct: state});
  }
  
  handleSubmit(e){
    e.preventDefault();
    
    this.props.onAdd(this.state.newProduct);
  }
  
  render(){
    const divStyle = {};
    
    return(
      <div className="card mb-3">
        <div className="card-header">
          <h2>Add new product</h2>
        </div>
        <div className="card-body">
          <div style={divStyle}>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                  <input type="text" onChange={(e) => this.handleInput('title', e)} className="form-control"/>
              </div>
              
              <div className="form-group">
                <label>Description:</label>
                <input type="text" onChange={(e) => this.handleInput('description', e)} className="form-control"/>
              </div>
              
              <div className="form-group">
              <label>Price:</label>
                <input type="text" onChange={(e) =>this.handleInput('price', e) } className="form-control"/>  
              </div>
              
              <input type="submit" className="btn btn-primary" value="CREATE"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
