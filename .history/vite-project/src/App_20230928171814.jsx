// import HelloWorld from "./BaiHoc9/HelloWorld";
// import BTH2 from "./BaiHoc9/BTH2";
// import BTH3 from "./BaiHoc9/BTH3.JSX";
// import BTH4 from "./BaiHoc9/BTH4";
// import BT1 from "./BaiHoc9/BT1";
// import UserForm from "./BaiHoc9/UserForm";
// import Greeting from "./BaiHoc9/Greeting";
import { useState } from "react";
import BTH2 from "./BaiHoc10/BTH2";

import photo1 from "./assets/2023-04-02.jpg";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handOnChange = (e) => {
    const value1 = e.target.value;
    console.log(value1);
    setText(value1);
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
      <div className="container">
        <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
        <img src={photo1} width="200" height="100" className="img" />

        <div className="require-title">Đây là ảnh dùng link online</div>
        <img src="https://i.imgur.com/0BJobQo.jpg" className="img2" />

        <BTH2 />
      </div>
    </>
  );
}

export default App;
