import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

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
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       header: 'Header from props...',
//       content: 'Content from props...'
//     }
//   }
//   render(){
//     return(
//       <div>
//         <Header headerProp = {this.state.header} />
//         <Content contentProp = {this.state.content} />
//       </div>
//     );
//   }
// }
//
// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>{this.props.headerProp}</h1>
//       </div>
//     );
//   }
// }
//
// class Content extends React.Component{
//   render(){
//     return(
//       <div>
//         <h2>{this.props.contentProp}</h2>
//       </div>
//     );
//   }
// }

// 6.
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h3>Array: {this.props.propArray}</h3>
//         <h3>Bool: {this.props.propBool ? 'True...' : 'False...'}</h3>
//         <h3>Func: {this.props.propFunc(3)}</h3>
//         <h3>Number: {this.props.propNumber}</h3>
//         <h3>String: {this.props.propString}</h3>
//         <h3>Object: {this.props.propObject.objectName1}</h3>
//         <h3>Object: {this.props.propObject.objectName2}</h3>
//         <h3>Object: {this.props.propObject.objectName3}</h3>
//       </div>
//     );
//   }
// }
//
// App.propTypes = {
//   propArray: PropTypes.array.isRequired,
//   propBool: PropTypes.bool.isRequired,
//   propFunc: PropTypes.func,
//   propNumber: PropTypes.number,
//   propString: PropTypes.string,
//   propObject: PropTypes.object
// }
//
// App.defaultProps = {
//   propArray: [1, 2, 3, 4, 5, 6],
//   propBool: true,
//   propFunc: function(e) {return e},
//   propNumber: 1,
//   propString: 'String value...',
//
//   propObject: {
//     objectName1: 'objectValue1',
//     objectName2: 'objectValue2',
//     objectName3: 'objectValue3'
//   }
// }

// 7.
// class App extends React.Component{
//   constructor(){
//     super();
//
//     this.state = {
//       data: []
//     }
//
//     this.setStateHandler = this.setStateHandler.bind(this);
//     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//   };
//
//   setStateHandler(){
//     var item = 'setState';
//     var myArray = this.state.data.slice();
//     myArray.push(item);
//
//     this.setState({data: myArray});
//   };
//
//   forceUpdateHandler(){
//     this.forceUpdate();
//   };
//
//   findDomNodeHandler(){
//     var myDiv = document.getElementById('myDiv');
//     ReactDOM.findDOMNode(myDiv).style.color = 'green';
//   };
//
//   render(){
//     return(
//       <div>
//         <button onClick = {this.setStateHandler}>SET STATE</button>
//         <h4>State Array: {this.state.data}</h4>
//
//         <button onClick= {this.forceUpdateHandler}>FORCE UPDATE</button>
//         <h4>Random number: {Math.random()}</h4>
//
//         <button onClick =  {this.findDomNodeHandler}>FIND DOME NODE</button>
//         <div id="myDiv">NODE</div>
//       </div>
//     );
//   }
// }

// 8.
class App extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this);
    };

    setNewNumber(){
      this.setState({data: this.state.data + 1});
    }

    render(){
      return(
        <div>
          <button onClick = {this.setNewNumber}>INCREMENT</button>
          <Content myNumber = {this.state.data}></Content>
        </div>
      );
    }
}

class Content extends React.Component{
  componentWillMount(){
    console.log('Component WILL MOUNT!');
  }

  componentDidMount(){
    console.log('Component DID MOUNT!');
  }

  componentWillReceiveProps(newProps){
    console.log('Component WILL RECEIVE PROPS!');
  }

  shouldComponentUpdate(newProps, newState){
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, nextState){
    console.log('Component DID UPDATE!');
  }

  componentWillUnmount(){
    console.log('Component WIILL UNMOUNT!');
  }

  render(){
    return(
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
