function BT2(props) {
  console.log(props);

  const handleLogin = () => {
    props.onLogin();
  };

  const handleLogout = () => {
    props.onLogout();
  };

  // const [isLogin, setIsLogin] = useState(false);

  // const onLogin = () => {
  //     setIsLogin(true);
  // }

  // const onLogout = () => {
  //     setIsLogin(false);
  // }

  return props.isLogined ? (
    <button
      onClick={handleLogout}
      style={{ width: "1000px", height: "30px", background: "red" }}
    >
      Right
    </button>
  ) : (
    <button
      onClick={handleLogin}
      style={{ width: "30px", height: "30px", background: "blue" }}
    >
      Left
    </button>
  );
}

export default BT2;
