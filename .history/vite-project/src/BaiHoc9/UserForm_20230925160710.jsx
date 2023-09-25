import { useState } from "react";

const Greeting = (props) => {
  console.log(3, props);
  return (
    <div>
      <div>Greeting: {props.name}</div>
    </div>
  );
};

function UserForm() {
  const [userInput, setuserInput] = useState("");

  const handleInputChange = (e) => {
    setuserInput(e.target.value);
  };
  const handleButtonClick = () => {
    alert(userInput);
  };
  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        name="user"
        placeholder="Please type somthing"
      />
      <button onClick={handleButtonClick}>button</button>
      <Greeting name={userInput}></Greeting>
    </div>
  );
}
export default UserForm;
