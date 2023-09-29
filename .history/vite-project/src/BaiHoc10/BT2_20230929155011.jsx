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
      style={{ width: "100px", height: "100px", background: "red" }}
    >
      Right
    </button>
  ) : (
    <button
      onClick={handleLogin}
      style={{ width: "100px", height: "100px", background: "blue" }}
    >
      Left
    </button>
  );
}

export default BT2;
