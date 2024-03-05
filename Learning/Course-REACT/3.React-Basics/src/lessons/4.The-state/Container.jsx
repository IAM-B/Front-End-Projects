import { useState } from "react";

export default function Container() {
  const [count, setCount] = useState(0);
  console.log("Updating!");

  
  function handleClick(){
    // setCount(count + 1)
    
    setCount(count => count +1)
    setCount(count => count +1)
    setCount(count => count +1)
  }
  return (
    <div>
      <h1>Le state</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
