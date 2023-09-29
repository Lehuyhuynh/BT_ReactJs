import { useState } from "react";

function BTH2() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber((current) => {
      return (current = current + 1);
    });
  };
  return (
    <>
      <button onClick={handleClick}> Click</button>
      <h3>You clicked {numClicked} times</h3>
    </>
  );
}
export default BTH2;
