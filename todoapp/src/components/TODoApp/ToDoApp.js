import React, { Component } from 'react'
import "./ToDoApp.css";


export default class ToDoApp extends Component {
  state={
    input:"",
    items:[]
  }

  handlechange=event=>{
    this.setState({
      input:event.target.value
    })
    console.log(this.state.input)
  };
  storeItems=event=>{
    event.preventDefault();    //used to avoid refresh page
    const {input}=this.state;
   

    this.setState({
        items:[...this.state.items,input],
        input:""  //remove next step in adding


    });

  };

  deleteItem=key=>{


     this.setState({
      items:this.state.items.filter((data,index)=>index !==key)  
     });
  }
  render() {
    const {input,items}=this.state
    console.log(items)
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>ToDo App</h1>
          <input type="text" value={input} onChange={this.handlechange} placeholder='Enter Items...'/>

        </form>

        <ul>
          {items.map((data,index)=> (
              <li key={index}>{data} <i class="fa-sharp fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i></li>
          ))}
        </ul>
        
      </div>
    )
  }
}

// click index=clickbtn index same=> deleat