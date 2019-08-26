import React, {Component} from 'react'

class ExampleComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      articles: [
        {title: "React Redux Tutorial for Beginners", id: 1},
        {title: "Redux e React: cos'è Redux e come usarlo con React", id: 2}
      ]
    };
  }

  render(){
    const {articles} = this.state;
    return(
      <ul>
        {articles.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>
    );
  }
}

export default ExampleComponent;
