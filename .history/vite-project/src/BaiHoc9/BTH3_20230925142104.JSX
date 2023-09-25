import { useState } from "react";

const DemoComponent = (props) => {
  return (
    <div>
      <div> đây là tuổi :{props.age}</div>
      <div> tên : {props.displayName}</div>
    </div>
  );
};
function BTH3() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Huynh");
  const onIncreaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="container">
      <div> {age} </div>
      <button onClick={onIncreaseAge}> tăng age lên 1 </button>
      <DemoComponenT age={age} displayName={name} />
    </div>
  );
}
export default BTH3;
