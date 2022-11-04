import React, { Component } from 'react'
import "./ToDoApp.css";
export default class ToDoApp extends Component {
  render() {
    return (
      <div className='todo-container'>
        <h1>ToDo App</h1>

        <form className='input-section'>
          <input type="text" placeholder='Enter Items...'/>

        </form>

        <ul>
          <li>Items</li>
        </ul>
        
      </div>
    )
  }
}
