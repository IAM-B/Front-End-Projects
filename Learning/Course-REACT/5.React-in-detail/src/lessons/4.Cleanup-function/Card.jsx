import { useEffect, useState } from "react";
import "./Card.css"

export default function Card() {
    const [state, setState] = useState(0)

    useEffect(() => {
        console.log("Effect");

        return () => console.log("Cleanup Function");
    })

    return (
        <div className="card">
            <p>Voici la card et son state</p>
            <button onClick={() => setState(state + 1)}>Incrementation</button>
        </div>
    )
}