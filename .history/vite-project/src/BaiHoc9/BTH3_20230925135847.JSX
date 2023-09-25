import { useState } from "react";

function BTH3() {
  const [age, setAge] = useState(0);
  const onIncreaseAge = () => {
    setAge(age+1);
  }
  return (
    <div> {age}</div>
    <div onClick={onIncreaseAge}>tăng age lên 1</div>
  )
}
export default BTH3;
