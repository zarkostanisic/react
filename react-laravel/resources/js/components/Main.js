import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Main extends Component{
  constructor(){
    super();
    
    this.state = {
      products: [],
      currentProduct: null,
      edit: false
    };
    
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount(){
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(products => {
        this.setState({products});
      });
  }
  
  renderProducts(){
    return this.state.products.map(product => {
      return(
        <li className="list-group-item" onClick={() => this.handleClick(product)} 
          key={ product.id }>
          { product.title }
        </li>
      );
    });
  }
  
  render(){
    
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>All Products</h3>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  { this.renderProducts() }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <Product onDelete={ this.handleDelete } product={this.state.currentProduct}/>
            <AddProduct onAdd={ this.handleAddProduct }/>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
  
  handleClick = (product) => {
    this.setState({currentProduct: null}, () => {
      this.setState({currentProduct: product});
    });
  }
  
  handleAddProduct(product){
    product.price = Number(product.price);
    
    fetch('/api/products', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(product)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState((prevState) => ({
        products: prevState.products.concat(data),
        currentProduct:data
      }));
    });
  }
  
  handleDelete(){
    const currentProduct = this.state.currentProduct;
    
    fetch('/api/products/' + currentProduct.id, {
      method: 'delete'
    })
    .then(response => {
      var array = this.state.products.filter(function(item){
        return item !== currentProduct;
      });
    
      this.setState( {products: array, currentProduct: null });
    });
  }
}

export default Main;

if(document.getElementById('root')){
  ReactDOM.render(
    <BrowserRouter>
        <div >
            <Switch>
                <Route path="/:id/edit" component={EditProduct} exact={true} />
                <Main/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
  );
} 
