import React from 'react'

// 1.
// class App extends React.Component{
//   render(){
//     var i = 1;
//
//     var myStyle = {
//       fontSize: 100,
//       color: '#FF0000'
//     }
//
//     return(
//       <div>
//          Hello World!!!
//         <h1>Header</h1>
//         <h2>Content</h2>
//         <p>This is the content!!!</p>
//         <p data-myattribute="somevalue">This is the content!!!</p>
//         <h1>{1 + 1}</h1>
//         <h1>{i == 1 ? 'True!' : 'False!'}</h1>
//         <h1 style={myStyle}>Style</h1>
//         {/*End of the line Comment*/}
//       </div>
//     );
//   }
// }

// 2.
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Header/>
//         <Content/>
//       </div>
//     );
//   }
// }
//
// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Header</h1>
//       </div>
//     );
//   }
// }
//
// class Content extends React.Component{
//   constructor(){
//     super();
//
//     this.state = {
//       data: [
//         {'id': 1, 'name': 'Foo', 'age': 20},
//         {'id': 2, 'name': 'Bar', 'age': 30},
//         {'id': 3, 'name': 'Baz', 'age': 40}
//       ]
//     }
//   }
//
//   render(){
//     return(
//       <div>
//         <h2>Content</h2>
//         <table>
//           <tbody>
//             {this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
//
// class TableRow extends React.Component{
//   render(){
//     return(
//       <div>
//         <tr>
//           <td>{this.props.data.id}</td>
//           <td>{this.props.data.name}</td>
//           <td>{this.props.data.age}</td>
//         </tr>
//       </div>
//     );
//   }
// }

// 3.
// class App extends React.Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       header: 'Header from state...',
//       content: 'Content from state...'
//     }
//   }
//
//   render(){
//     return(
//       <div>
//         <h1>{this.state.header}</h1>
//         <h2>{this.state.content}</h2>
//       </div>
//     );
//   }
// }

// 4.
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.headerProp}</h1>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     );
//   }
// }
//
// App.defaultProps = {
//   headerProp: 'Header from props...',
//   contentProp: 'Content from props...'
// }

// 5.
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header: 'Header from props...',
      content: 'Content from props...'
    }
  }
  render(){
    return(
      <div>
        <Header headerProp = {this.state.header} />
        <Content contentProp = {this.state.content} />
      </div>
    );
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}
export default App;
