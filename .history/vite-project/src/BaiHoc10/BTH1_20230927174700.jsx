import photo1 from "./assets/2023-04-02.jpg";
function BTH1() {
  return (
    <div className="container">
      <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
      <img src={photo1} width="200" height="100" className="img" />
      {/* <div className='require-title'>Đây là ảnh dùng require</div>
    <img src={require('./photo1.jpg')} className='img2' /> */}
      <div className="require-title">Đây là ảnh dùng link online</div>
      <img src="https://i.imgur.com/0BJobQo.jpg" className="img2" />
      <div className="require-title">Đây là ảnh dùng base64</div>
      <img src={base64Photo} className="img3" />
      <div className="require-title">Đây là ảnh dùng svg</div>
      <img src={Logo} className="img3" />
      <DeleteIcon />
    </div>
  );
}
export default BTH1;

import { base64Photo } from "./Constant";
import Logo from "./logo.svg";
import DeleteIcon from "./DeleteIcon";
