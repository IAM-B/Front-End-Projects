import { useState, useRef } from "react"
import "./Container.css"

export default function Container() {
  const [state, setState] = useState("")

  function handleInput(e){
    setState(e.target.value)
  }

  const emailRef = useRef()

  function handleSubmit(e){
    e.preventDefault()

    console.log(state);
    console.log(emailRef.current.value);
  }
  return (
    <div>
      <h1>
        Controlled et Ucontrolled inputs</h1>

        <form onChange={handleSubmit}>
          <label htmlFor="pseudo">You pseudo</label>
          <input 
          onChange={handleInput}
          value={state}
          type="text"
          id="pseudo" 
          />
          {!state && <p>please complete this entry</p>}

          <input 
          ref={emailRef}
          type="eamil"
          id="email" 
          />

          <button>Send</button>
        </form>
        <p>You pseudo is: {state}</p>
    </div>
  )
}
