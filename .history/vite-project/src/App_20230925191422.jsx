// import HelloWorld from "./BaiHoc9/HelloWorld";
// import BTH2 from "./BaiHoc9/BTH2";
// import BTH3 from "./BaiHoc9/BTH3.JSX";
// import BTH4 from "./BaiHoc9/BTH4";
// import BT1 from "./BaiHoc9/BT1";
// import UserForm from "./BaiHoc9/UserForm";
// import Greeting from "./BaiHoc9/Greeting";
import { useState } from "react";
import "./App.css";
const [text, setText] = useState("");
function App() {
  const handOnChange = (e) => {
    const valuee = e.target.value;
    console.log(e.target.value);
    setText(valuee);
  };

  return (
    <>
      {/* <HelloWorld></HelloWorld>
      <BTH2></BTH2>
      <BTH3></BTH3>
      <BTH4></BTH4>
      <BT1></BT1>

      <UserForm></UserForm>
      <Greeting></Greeting> */}

      <input type="text" onChange={handOnChange} />
      <p>{text}</p>
    </>
  );
}

export default App;
