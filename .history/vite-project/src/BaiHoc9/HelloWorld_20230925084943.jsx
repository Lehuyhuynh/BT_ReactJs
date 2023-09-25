function HelloWorld() {
  let name = "Huynh";
  const user = {
    ho: "Le",
    name: { name },
  };
  return (
    <div>
      Hello {user.ho} {user.name}
      <p>Rất vui được gặp bạn</p>
    </div>
  );
}
export default HelloWorld;
