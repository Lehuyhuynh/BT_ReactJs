import { useState } from "react";

function BTH1() {
  const [age, setAge] = useState(0);
  const onchangeAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <div>Tuổi là : {age} </div>
      <div onClick={onchangeAge}> Tăng tuổi lên 1</div>
    </div>
  );
}
export default BTH1;
