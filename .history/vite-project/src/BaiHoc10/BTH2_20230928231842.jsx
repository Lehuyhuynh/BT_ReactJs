import { useState } from "react";
import styles from "/src/style.module.css";

function BTH2() {
  const [number, setNumber] = useState(0);
  const click = () => {
    setNumber((current) => {
      return (current = current + 1);
    });
  };
  const color = number % 2 === 0 ? styles["textBlue"] : styles.textRed;
  return (
    <div className="App">
      <button onClick={click}>click</button>
      <h3> mau {color} </h3>
    </div>
  );
}
export default BTH2;
