function BTH4() {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }
  return (
    <div>
      <input type="text" name="user" placeholder="Please type somthing" onChange={handleInputChange} />
      <button onClick={}>Print</button>
    </div>
  );
}
export default BTH4;
