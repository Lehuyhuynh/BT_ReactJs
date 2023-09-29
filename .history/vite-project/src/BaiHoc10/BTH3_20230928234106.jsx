import styles from "/src/style.module.css";
function BTH3() {
  return (
    <form action="">
      <div className={styles.container}>
        <h3 className={styles.title}>Login</h3>
        <div>
          <label className={styles.fieldTitle} htmlFor="">
            nhập email:
          </label>
          <input type="email" className={styles.input} />
        </div>
        <div>
          <label htmlFor="" className={styles.fieldTitle}>
            nhập password:
          </label>
          <input type="password" className={styles.input} />
        </div>
        <label>
          <input className={styles.checkbox} name="isRead" type="checkbox" />I
          read and accept the privacy policy:
        </label>

        <p>bấm submit form</p>
        <button className={styles.btnSubmit}>submit nè</button>
      </div>
    </form>
  );
}
export default BTH3;
