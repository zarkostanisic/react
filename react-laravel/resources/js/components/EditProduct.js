import React, { Component } from 'react';
import Main from './Main';
import { Link } from 'react-router-dom';

class EditProduct extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      updateProduct: {
        title: '',
        description: '',
        price: 0,
        availability: 0
      }
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      updateProduct: {
        title: this.props.location.state.title,
        description: this.props.location.state.description,
        price: this.props.location.state.price,
        availability: this.props.location.state.availability
      }
    });
  }
  
  handleInput(key, e){
    var state = Object.assign({}, this.state.updateProduct);
    state[key] = e.target.value;
    
    this.setState({updateProduct: state});
  }
  
  handleSubmit(e){
    e.preventDefault();
    
    const currentProduct = this.props.location.state;
    const product = this.state.updateProduct;
    
    fetch('/api/products/' + currentProduct.id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // var array = this.state.products.filter(function(item){
      //   return item !== currentProduct;
      // });
      // 
      // this.setState((prevState) => ({
      //   products: array.concat(data),
      //   currentProduct: data
      // }));
      this.props.history.push('/');
    });
  }
  
  render(){
    const product = this.props.location.state;
    
    if(!product){
      return(
        <div>
          Please Select Product.
        </div>
      );
    }
    
    return(
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>
              <Link className="btn btn-success" to="/">BACK</Link>Edit product
            </h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Title:</label>
                <input type="text" onChange={(e) => this.handleInput('title', e)} value={ this.state.updateProduct.title } className="form-control"/>
              </div>
              
              <div className="form-group">
                <label>Description:</label>
                <input type="text" onChange={(e) => this.handleInput('description', e)} value={ this.state.updateProduct.description } className="form-control"/>
              </div>
              
              <div className="form-group">
                <label>Price:</label>
                <input type="text" onChange={(e) =>this.handleInput('price', e) } value={ this.state.updateProduct.price } className="form-control"/>  
              </div>
              <input className="btn btn-primary" type="submit" value="EDIT"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
 
