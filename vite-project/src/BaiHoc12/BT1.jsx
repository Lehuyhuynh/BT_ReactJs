import { useState } from "react";

export default function BT1() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  let [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  console.log("number1", typeof number1);
  console.log("number2", typeof number2);
  const number3 = parseFloat(number1);
  const number4 = parseFloat(number2);

  const ChangeNumber1 = (e) => {
    setNumber1(e.target.value);
  };
  const ChangeNumber2 = (e) => {
    setNumber2(e.target.value);
  };
  const clickSum = () => {
    setSum(parseFloat(number3) + parseFloat(number4));
    console.log("sum", typeof sum);
  };
  const clickMultiply = () => {
    setMultiply(number3 * number4);
    console.log("multiply", typeof multiply);
  };
  // if (typeof number1 !== "number" || typeof number2 !== "number") {
  //   alert(" ban nhap sai");
  // }
  return (
    <div>
      <input type="text" onChange={ChangeNumber1} placeholder="Number 1" />
      <input type="text" onChange={ChangeNumber2} placeholder="Number 2" />
      <div onClick={clickSum}> Tổng : {sum} </div>
      <div onClick={clickMultiply}> Tích : {multiply}</div>
    </div>
  );
}
