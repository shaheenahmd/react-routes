import React, { useState } from "react";
import { usercontext } from "./Context";
import About from './component/About'




function App() {

  const [counter, setCounter] = useState(0);
 
  let name= 'shaheen'
  return (
    <div className="bg-white w-full min-h-screen">
     <h1>App component</h1>

     <button className="bg-red-500 rounded text-white p-3 m-2" onClick={()=>setCounter(counter+1)}>Add</button>

     <h1 className='text-2xl'>Counter value : {counter}</h1>
     

     <usercontext.Provider value={{counter ,setCounter, name}}>
      <About/>
          
     </usercontext.Provider>

    </div>
  );
}

export default App;
