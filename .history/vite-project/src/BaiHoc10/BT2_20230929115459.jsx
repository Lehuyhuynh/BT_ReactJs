import { useState } from "react";

function BT2() {
  const [string, setString] = useState();
  const Right = () => {
    console.log(2, string);
    setString(Left);
  };
  const Left = () => {
    console.log(2, string);
    setString(Right);
  };
  return (
    <div>
      <button onClick={Right}>Right</button>
      <button onClick={Left}>Right</button>
    </div>
  );
}
export default BT2;
