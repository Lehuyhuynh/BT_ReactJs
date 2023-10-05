import { useParams } from "react-router-dom";

export default function ProductId() {
  const param = useParams;
  console.log(22, param);
  return <div>heelo world 12213</div>;
}
