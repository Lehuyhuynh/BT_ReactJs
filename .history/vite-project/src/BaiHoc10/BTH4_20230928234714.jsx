import styles from "/src/style.module.css";
function BTH4() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Login</h3>
      <form>
        <p className={styles.fieldTitle}>Nhập email:</p>
        <input name="email" type="text" className={styles.input} />
        <p className={styles.fieldTitle}>Nhập password:</p>
        <input name="password" type="password" className={styles.input} />
        <br />
        <label>
          <input className={styles.checkbox} name="isRead" type="checkbox" /> I
          read and accept the privacy policy:
        </label>
        <br />

        <button className={styles.btnSubmit}>Submit nè</button>
      </form>
    </div>
  );
}
export default BTH4;
