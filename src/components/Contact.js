import '../scss/Contact.scss';

import img1 from "../img/contact/1.svg";
import img2_1 from "../img/contact/2_1.svg";
import img2_2 from "../img/contact/2_2.svg";
import img2_3 from "../img/contact/2_3.svg";
import img3 from "../img/contact/3.svg";


function Contact(){
  return(
    <div className="Contact">

      <div className="grid_one">
        <img className="img1" src={img1} alt="logo"/>
        <div className="grid_two">
          <a href='https://www.kaywon.ac.kr/CmsHome/MainDefault.aspx' target="_blank" rel="noreferrer">
            <img className="img2_1" src={img2_1} alt="school hompage"/>
          </a>
          <a href='https://www.kaywon.ac.kr/CmsHome/dep_05_01.aspx' target="_blank" rel="noreferrer">
          <img className="img2_2" src={img2_2} alt="KAD homepage"/>
          </a>
          <a href='https://www.instagram.com/kaywon_architectural/' target="_blank" rel="noreferrer">
            <img className="img2_3" src={img2_3} alt="Instagram"/>
          </a>
        </div>
      </div>
    
      <div className="grid_three">
        <div className="address">주소</div>
        <div className="address_s">경기도 의왕시 내손동 계원대학로 66</div>
        <div className="location">위치</div>
        <div className="location_s">창조관 4F 건축디자인학과</div>
        <div className="tocome">찾아오시는 길</div>
        <img className="tocome_s" src={img3} alt="desc"/>
      </div>

    </div>
  );
}

export default Contact;