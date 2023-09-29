import { useState } from "react";

function BT2() {
  const [text, setText] = useState(Night);
  const Night = () => {
    console.log("right", text);
    setText(Day);
  };
  const Day = () => {
    console.log("Day", text);
    setText(Night);
  };
  return (
    <div className="Container">
      <button onClick={Night}>Night</button>
      <button onClick={Day}>Day</button>
    </div>
  );
}
export default BT2;
