import style from "./src/style.module.css";
import { useState } from "react";

function BTH2() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber((current) => {
      return (current = current + 1);
    });
  };
  const textStyle = numClicked % 2 === 0 ? styles.textBlue : styles.textRed;
  return (
    <div className="component">
      <button onClick={handleClick}> Click</button>
      <h3>You clicked {numClicked} times</h3>
    </div>
  );
}
export default BTH2;
