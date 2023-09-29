function BT2(props) {
  console.log(2, props);
  const Right = () => {
    props.onLeft();
  };

  const Left = () => {
    props.onRight();
  };
  return props.righted ? (
    <button onClick={Right}>Right</button>
  ) : (
    <button onClick={Left}>Left</button>
  );
}
export default BT2;
