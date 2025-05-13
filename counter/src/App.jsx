import {useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('	https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( setUsers);
  }, [])    
  // let counter=5
  // let [counter, loveCounter] =useState(0)
  // const addValue= () => {
  //   if (counter == 20){
  //     loveCounter (counter= 20)
  //   }
  //     else{
  //       loveCounter(counter + 1)
  //     }
 
  // }
  // const removeValue= () => {
  //   if(counter > 0 ){
  //     loveCounter(counter -1)
  //   }
  //     else
  //   {
  //     loveCounter(counter = 0)
  //   }
   
  // }

  // return (
  //   <>
  //   <h1>Aqsa Usman ❤ </h1>
  //   <h2>Counter value : {counter}</h2>

  //   <button
  //   onClick={addValue}> 
  //   Add value</button>
  //   <br />
  //   <button 
  //   onClick={removeValue}>
  //   Remove Value</button>
  //   </>
  // )
  return(
    <ul>
      {users.map(user => <li key = {user.id}>{user.name}</li>)}
    </ul>
  );
}

export default App
