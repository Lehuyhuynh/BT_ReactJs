import { useState } from "react";

const DemoComponent = (props) => {
  console.log(3, props);
  return (
    <div>
      <div>Đây là tuổi: {props.age}</div>
      <div>Đây là tên: {props.displayName}</div>
    </div>
  );
};
function BTH3() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Huynh");

  const onIncreaseAge = () => {
    setAge(age + 1);
    setName();
  };

  return (
    <div className="container">
      <div>{age}</div>
      <button onClick={onIncreaseAge}>Tăng age lên 1</button>
      <DemoComponent age={age} displayName={name} />
    </div>
  );
}
export default BTH3;
