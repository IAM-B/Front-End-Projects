import {useRef, useState} from "react"

export default function Container() {

  const [state, steState] = useState(0)

const countRef = useRef(0)

function handleCoutRef(){
  countRef.current++
  console.log(countRef.current);
  console.log(document.querySelector(".txt"));
}

const txtRef = useRef()
console.log(txtRef);
  return (
    <div>
      <h1>Understanding refs</h1>
      <h2>The hook useRef {state}</h2>
      <p>The ref value {countRef.current}</p>
      <button onClick={handleCoutRef}>Increment ref</button>
      <button onClick={() => steState(state + 1)}>Increment state</button>

      <p className="txt" ref={txtRef}>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}
