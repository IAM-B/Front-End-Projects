import "./Container.css"
import { useEffect, useState } from "react"

export default function Container() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("After one created");
  }, [count])

  console.log("Upgrad");
  
  return (
    <div>
      <h1>The hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
    </div>
  )
}
