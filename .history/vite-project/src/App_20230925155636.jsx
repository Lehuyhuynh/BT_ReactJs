import HelloWorld from "./BaiHoc9/HelloWorld";
import BTH2 from "./BaiHoc9/BTH2";
import BTH3 from "./BaiHoc9/BTH3.JSX";
import BTH4 from "./BaiHoc9/BTH4";
import BT1 from "./BaiHoc9/BT1";
import UserForm from "./BaiHoc9/UserForm";
import Greeting from "./BaiHoc9/Greeting";
import "./App.css";

function App() {
  const [userInput, setuserInput] = useState("");
  const handleInputChange = (e) => {
    setuserInput(e.target.value);
  };
  const handleButtonClick = (e) => {
    alert(userInput);
  };
  return (
    <>
      <HelloWorld></HelloWorld>
      <BTH2></BTH2>
      <BTH3></BTH3>
      <BTH4></BTH4>
      <BT1></BT1>

      <UserForm
        userInput={Input}
        onChange={handleInputChange}
        onClick={handleButtonClick}
      ></UserForm>
      <Greeting></Greeting>
    </>
  );
}

export default App;
