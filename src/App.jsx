import { useEffect, useState } from "react"


function App() {
   var [count,setCount]=useState(0);

     useEffect(()=>{
      setInterval(()=>{
        setCount((cv)=>{
          return cv+1;
        });
        console.log(count);
      },2000); 
     },[])
   
  return (
    <div className="border border-2 border-success m-3 p-3">
       <h1>React Component App</h1> 
        <h3 className="border border-1 border-warning m-2 p-2">Counter:{count}</h3>
    </div>
      
  )
}

export default App
