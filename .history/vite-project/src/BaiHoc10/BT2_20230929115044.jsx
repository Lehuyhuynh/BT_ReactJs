import { useState } from "react";

function BT2() {
  const [string, setString] = useState(right);
  const right = () => {
    console.log(2, right);
    setString();
  };
  return string === right ? (
    <button onClick={right}>Right</button>
  ) : (
    <button onClick={right}>Right</button>
  );
}
export default BT2;
