import { useState } from "react";

function UserForm() {
  const [userInput, setuserInput] = useState("");
  const handleInputChange = (e) => {
    setuserInput(e.target.value);
  };
  const handleButtonClick = (e) => {
    alert(userInput);
  };
  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="Please type somthing"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>button</button>
    </div>
  );
}
export default UserForm;
