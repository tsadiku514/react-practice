import logo from './logo.svg';
import './App.css'; 
import React, { useEffect, useState } from 'react'; 
import ReactDOM, { render } from 'react-dom'; 
import './index.css';   
import { Row, Column } from 'react-foundation'; 
import {hashString} from 'react-hash-string' 
import { usePopup } from 'react-hook-popup'; 
import { PopupProvider } from 'react-hook-popup';




export default function ToDo() {  
  const [items, setItems] = useState([{id: Date.now().toString(), value: 'Workout'},] )   

  function handleSubmit(event) {  
    event.preventDefault() 
    const chore = event.target.elements.choreInput.value 
    console.log(Date.now()) 
    console.log(Date.now().toString())
    items.push({id: Date.now().toString(), value: chore})  
    setItems([...items])
  }  

  function handleDelete(id) {
    const newList = items.filter((item) => item.id !== id) 
    setItems(newList)
  } 

  function handleChange(id, event) {
    console.log(id) 
    console.log(event.target.value) 
    const newList = items.map((item) => {
      if (item.id === id) {
        const updateItem = {
          id: id, 
          value: event.target.value
        } 
        return updateItem
      } 
      return item
    }) 
    setItems(newList)
  }
  // useEffect(() => {
  //   console.log("baaa") 
  //   return () => {
  //     console.log("apple")
  //   }
  // }, [items])
  return (
      <div>
        <div className="flex"> 
          <div>
            <label htmlFor="choreInput" >Add item: </label> 
          </div> 
          <div>
            <form onSubmit={handleSubmit}><input id="choreInput" type="text"></input></form>  
          </div>
        </div> 
        <ul> 
          {items.map(item => ( 
          <li key={item.id}>
            <button onClick={() => handleDelete(item.id)}>Done!</button> 
            <input onChange={(event) => handleChange(item.id, event)} defaultValue={item.value}/>
          </li>
        ))}
        </ul> 
        <pre>{JSON.stringify(items, null, 2)}</pre> 
      </div> 
  )
}


