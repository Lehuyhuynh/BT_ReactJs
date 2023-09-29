// import HelloWorld from "./BaiHoc9/HelloWorld";
// import BTH2 from "./BaiHoc9/BTH2";
// import BTH3 from "./BaiHoc9/BTH3.JSX";
// import BTH4 from "./BaiHoc9/BTH4";
// import BT1 from "./BaiHoc9/BT1";
// import UserForm from "./BaiHoc9/UserForm";
// import Greeting from "./BaiHoc9/Greeting";

import photo1 from "./assets/2023-04-02.jpg";
import BTH2 from "./BaiHoc10/BTH2";
import BTH3 from "./BaiHoc10/BTH3";
import BTH4 from "./BaiHoc10/BTH4";

import BT1 from "./BaiHoc10/BT1";
import BT2 from "./BaiHoc10/BT2";
import "./App.css";
import { useState } from "react";

function App() {
  // const [text, setText] = useState("");
  // const handOnChange = (e) => {
  //   const value1 = e.target.value;
  //   console.log(value1);
  //   setText(value1);
  // };
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return (current = current + 1);
    });
  };
  // const [string, setString] = useState(Night);

  // const Day = () => {
  //   console.log("Day", string);
  //   setString(Night);
  // };
  return (
    <div className="component">
      <button onClick={handleClick}>Click here</button>
      <h2 style={{ color: numClicked % 2 === 0 ? "blue" : "red " }}>
        You clicked {numClicked} times{" "}
      </h2>
      <BT1></BT1>
      <BT2></BT2>

      <div className="Container"></div>

      <BTH2></BTH2>
      <BTH3></BTH3>
      <BTH4></BTH4>
      {/* <HelloWorld></HelloWorld>
      <BTH2></BTH2>
      <BTH3></BTH3>
      <BTH4></BTH4>
      <BT1></BT1>

      <UserForm></UserForm>
      <Greeting></Greeting> */}

      {/* <input type="text" onChange={handOnChange} />
      <p>{text}</p> */}
      <div className="container">
        <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
        <img src={photo1} width="200" height="100" className="img" />

        <div className="require-title">Đây là ảnh dùng link online</div>
        <img src="https://i.imgur.com/0BJobQo.jpg" className="img2" />
      </div>
    </div>
  );
}

export default App;
