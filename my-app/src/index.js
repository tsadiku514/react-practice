import React from 'react'; 
import ReactDOM, { render } from 'react-dom'; 
import './index.css'; 




// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

const title = <h1>To-Do List:</h1>;  
const table = <body>Table</body>;

// function table() {
//   const element = (
//     <div>
//       <h2>Table</h2>
//     </div>
//   ); 
//   ReactDOM.render(element, document.getElementById('root'));
// }  
// ReactDOM.render(
//   title, 
//   document.getElementById('root')
// );
// ReactDOM.render(
//   table, 
//   document.getElementById('root')
// ); 
function tableCreate() {
  
  const element = (
    <div>
      <h1>To-Do List:</h1>
      <h2>Table</h2> 
      <h3>Table</h3>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}  
function Test(props) {
  return <h1>{props.name}</h1>;
}   
function Chores(props) {
  return <h1>{props.name}</h1>;
}
class App extends React.Component {
  render() {
  return (
    <div>
      <Test name="To-Do List:"/> 
      <Chores name="Workout"/> 
      <Chores name="Shower"/> 
      <Chores name="Eat Food"/> 
      <Chores name="Go to Work"/>
    </div>
  )
  } 
} 
class Button extends React.Component { 
  handleClick() {
    console.log('this is:', this);
  }
  render() {
    return (   
      <div>
        <button onClick={() => this.handleClick()}> 
        Click When Done
        </button>
      </div> 
    
    )
  }
} 
class Game extends React.Component {
  render() { 
    return (
    <div className="game">
      <div className="game-app"> 
        <App />
      </div> 
      <div className="game-button">
        <Button />
      </div>
    </div> 
    )
  }
} 
// ReactDOM.render(<Game />, document.getElementById('root'));  

class ButtonAndText extends React.Component {
  constructor(props) {
    super(props);   
  }
  render() {
    return ( 
      <div class="flex"> 
        <div>
          <button type="button" class="btn">Done!</button>
        </div> 
        <div>
          <div class="input-group"> 
          <input type="text" value={this.props.name}/> 
          </div>
        </div>
      </div>
    )
  }
}  
  
const arr = [<ButtonAndText name="Workout"/>, <ButtonAndText name="Shower"/>, <ButtonAndText name="Eat"/>, <ButtonAndText name="Work"/>] 
const listItems = arr.map((arr) => <li>{arr}</li>) 
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));
// class UserInputEx extends React.Component {
//   render() {
//     return (
//       <form>
//         <input type="text"/>
//       </form>
//     )
//   }
// }  

