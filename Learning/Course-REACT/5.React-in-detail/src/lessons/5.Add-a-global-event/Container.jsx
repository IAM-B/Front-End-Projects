import { useState } from "react";
import HugeContent from "./Huge-content";

export default function Container() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h1>Add a globa event</h1>

      <button onClick={() => setShowContent(!showContent)}>Then Content</button>

      {showContent && <HugeContent />}
    </div>
  );
}
