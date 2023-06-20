import React, { useReducer, useState } from 'react'
import reducer from '../reducer/Reducer';
import "./todos.css"
const initialState = [{
  id:0,
  task:"Sleep well",
  // taskValue: ""
}];
function Todos() {
  const [todos, dispatch] = useReducer(reducer,initialState);
  const [inputValue,setInputValue] = useState("")
  
  return (
    <div>
      <h1>ToDo List Application</h1>
      <div className="innerContainer">
        <form>
          
          <input  value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  placeholder='Enter the task To Add' />
          <button className='btn' onClick={(e)=>dispatch({type:"ADD_TASK",payload:inputValue,event:e,})} >ADD</button>
        </form>
          <button className='btn reset' onClick={(e)=>dispatch({type:"RESET",payload:e},)} >RESET TASKS</button>
        <p>You have added {todos.length} tasks</p>
        <hr/>
        <ol className='todoItems'>
        {
          todos.map((item)=><li className='todoItem' key={item.id}>{item.task}
          <div>
          {/* <span><button className='btn update'>UPDATE</button></span> */}
          <span><button className='btn reset' onClick={()=>dispatch({type:"DELETE",payload:item.id})}>DELETE</button></span>
          </div>
          </li>)
        }
        </ol>
      </div>
    </div>
  )
}

export default Todos
