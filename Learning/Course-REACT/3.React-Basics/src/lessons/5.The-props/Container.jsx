import { useState } from "react";
import Card from "./Card";

export default function Container() {

const [state, setState] = useState("Hello world")

const id = 1234

  return (
    <div>
      <h1>Les props</h1>
      <p>State container: {state}</p>
      <Card id={id} state={state} changeState={setState}/>
      {/* {Card({id: id})} */}
    </div>
  );
}
