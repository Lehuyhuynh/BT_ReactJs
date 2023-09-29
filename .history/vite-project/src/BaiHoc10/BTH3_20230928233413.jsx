import styles from "/src/style.module.css";
function BTH3() {
  return (
    <form action="">
      <div className="container">
        <h3>Login</h3>
        <div>
          <label htmlFor="">nhập email:</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">nhập password:</label>
          <input type="password" />
        </div>
        <label>
          <input name="isRead" type="checkbox" />I read and accept the privacy
          policy:
        </label>

        <p>bấm submit form</p>
        <button>submit nè</button>
      </div>
    </form>
  );
}
export default BTH3;
