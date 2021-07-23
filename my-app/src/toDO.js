import React, { useEffect, useState } from 'react'; 
import ReactDOM, { render } from 'react-dom'; 
import './index.css';   
import { Row, Column } from 'react-foundation'; 
import './App.js' 

class ButtonAndText extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {isToggleOn: true}; 
    this.handleClick = this.handleClick.bind(this);   
  } 
  handleClick() {
    this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))
  }
  render() {
    return ( 
      <div class="flex"> 
        <div>
          <button onClick={this.handleClick} type="button" class="btn">
            Done!
          </button>
        </div> 
        <div>
          <div class="input-group">  
          {this.state.isToggleOn ? <input type="text" value={this.props.name}/> : <form> <input type="text"/> </form>}
          </div>
        </div>
      </div>
    )
  }
}   

const arr = [<ButtonAndText />, <ButtonAndText />, <ButtonAndText />, <ButtonAndText />] 
export const listItems = arr.map((arr) => <li>{arr}</li>)  

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root')); 




class UserInputEx extends React.Component {
  render() {
    return (
      <form>
        <input type="text"/>
      </form>
    )
  }
}  

