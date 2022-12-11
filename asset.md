

import React from "react";
import axios from 'axios'


function App() {
      const [state,setState]=React.useState([])
    
  return (
   <div className="App">
   <button onClick={
    ()=>{
      
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          setState(response.data)
        })
       
    }
   }>Click</button>
   {
      state.map((obj,index)=>{
        return(
          <div>

          <h1>{index+1}</h1>
          <h4>{obj.title}</h4>
          </div>
        )
      })
   }
   </div>
  )
}

export default App