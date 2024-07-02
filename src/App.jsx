import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './app/feature/counter/counterSlice'
 
const App = () => {
  
//read data from store 
//this is new 
 const count =useSelector((state)=> (state.counter.value))

 //changing data by sending actions to the store
 const dispatch=useDispatch()
// console.log(dispatch);
// console.log(dispatch(increment()));
  return (
    <div>
      <h1>{count}</h1>
   
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App