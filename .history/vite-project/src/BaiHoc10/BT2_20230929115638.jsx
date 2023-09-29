import { useState } from "react";

function BT2() {
  const [string, setString] = useState();
  const Right = () => {
    console.log(2, string);
    // setString(Left);
    setString();
  };
  const Left = () => {
    console.log(2, string);
    // setString(Right);
    setString();
  };
  return (
    <div>
      <button>Right</button>
      <button>Right</button>
    </div>
  );
}
export default BT2;
