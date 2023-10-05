import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const taiKhoan = "Huynh";
  const matKhau = "Huynh123@";
  const navigator = useNavigate();
  const ChangeUser = (e) => {
    const values1 = e.target.value;
    setUser(values1);
    console.log("User :", values1);
  };
  const ChangePassword = (e) => {
    const values2 = e.target.value;
    setPassword(values2);
    console.log(" passWord: ", values2);
  };
  const handleLogin = () => {
    // const useEffect(() => {
    //   if (taiKhoan === user && matKhau === password) {
    //     alert("đăng nhập thành công");
    //   }
    // }, []);
    if (taiKhoan === user && matKhau === password) {
      alert("đăng nhập thành công");
      navigator("/");
    } else {
      alert(" ban nhap sai tai khoan hoac mat khau");
      navigator("/admin");
    }
  };

  return (
    <div>
      <h1> Login </h1>
      <h3>Tai Khoan</h3>
      <input type="text" onChange={ChangeUser} /> <br />
      <h3>Mat khau</h3>
      <input type="password" onChange={ChangePassword} /> <br />
      <button onClick={handleLogin}> Login </button>
      <div style={{ color: "red" }}>
        <h5>tài khoản: Huynh</h5>
        <h5>Mật khẩu: Huynh123@</h5>
      </div>
    </div>
  );
}
