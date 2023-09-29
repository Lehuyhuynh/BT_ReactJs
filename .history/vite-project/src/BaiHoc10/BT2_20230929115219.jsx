import { useState } from "react";

function BT2() {
  const [string, setString] = useState(Right);
  const Right = () => {
    console.log(2, string);
    setString();
  };
  return (string = Right ? (
    <button onClick={Right}>Right</button>
  ) : (
    <button onClick={left}>Right</button>
  ));
}
export default BT2;
