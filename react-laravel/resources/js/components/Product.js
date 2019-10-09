import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component{
  render(){
    const divStyle = {};
    const product = this.props.product;
    
    if(!product){
      return(<div className="alert alert-primary" style={divStyle}>Product Doesnt exist</div>);
    }
    
    return(
      <div className="card mb-3" style={divStyle}>
        <div className="card-header">
          <h2>{ product.title }</h2>
        </div>
        
        <div className="card-body">
          <p>{ product.description }</p>
          <strong>Status { product.availability ? 'Available' : 'Out of stock' }</strong>
          <p><i>Price: { product.price }</i></p>
          
          <button className="btn btn-danger" onClick={this.props.onDelete}>DELETE</button>
          <Link className="btn btn-success" to={{
              pathname: `/${product.id}/edit`,
              state: {
                product: product
              }
            }}>
              Edit
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
