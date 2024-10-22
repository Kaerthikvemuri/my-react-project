import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  return (
    <div className='container'>
      <h1>Countert:{props.counterReducer.count}</h1>
      <button onClick={()=>{props.dispatch({type:'INC'})}}>incr</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{props.dispatch({type:'DEC'})}}>dcr</button>
    </div>
  )
}

export default connect((store)=>{return store}) (Counter)
