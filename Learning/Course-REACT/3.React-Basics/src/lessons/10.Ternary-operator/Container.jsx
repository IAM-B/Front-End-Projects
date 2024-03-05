import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Ternary operator</h1>
      <form>
        <label htmlFor="consent">Do you accept the condition</label>
        <input onClick={() => setValidation(!validation)} type="checkbox" />
        <p
        // className={`${validation ? "valid" : "invalid"}`}
        style={{color: `${validation ? "lightgreen" : "red"}`}}
        >
          {validation ? "Great you can send the data" : "You must check the box"}
        </p>
        {validation ? <p>True</p> : <p>False</p>}
      </form>
    </div>
  );
}
