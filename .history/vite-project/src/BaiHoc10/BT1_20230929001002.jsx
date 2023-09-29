import styles from "/src/style1.module.css";
function BT1() {
  return (
    <div className={styles.container}>
      <div className={styles.Sidebar}>LeftSide</div>
      <div className={styles.Content}>RightSide</div>
    </div>
  );
}
export default BT1;
