import Card from "./Card"
import { useState } from "react"

export default function Container() {
  const [showCard, setShowCard] = useState(true)

  return (
    <div>
      <h1>Cleanup function</h1>
      <button onClick={() => setShowCard(!showCard)}>Show/Hide the card</button>
      {showCard && <Card />}
    </div>
  )
}
