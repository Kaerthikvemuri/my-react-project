import React from 'react'
import { connect } from 'react-redux'
import store from '../store/store'

function Todolist({todoReducer:{todos},dispatch}) {
  return (
    <div className='container'>
      <h1>todolist</h1>
      <input type="text" id='d1' />
      <button onClick={()=>{dispatch({type:'ADD_TODO',payload:document.getElementById("d1").value})}}>Add todo</button>
      {
      todos.map((todo)=>{
            return <li>{todo}</li>
        })
      }
    </div>
  )
}

export default connect(store=>store) (Todolist)
