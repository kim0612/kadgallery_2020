import {NavLink} from "react-router-dom";

import '../scss/Home.scss';

import img1 from '../img/home/1.jpg';
import img2_1 from '../img/project/StudioUh/Uh_8/1.jpg';
import img2_2 from '../img/project/StudioHan/Han_2/1.jpg';
import img2_3 from '../img/project/StudioUh/Uh_10/1.jpg';
import img2_4 from '../img/project/StudioHan/Han_11/1.jpg';
import img2_5 from '../img/project/StudioKim/Kim_11/1.jpg';
import img3_1 from '../img/home/3_1.jpg';
import img3_2 from '../img/home/3_2.jpg';
import img3_3 from '../img/home/3_3.jpg';
import img3_4 from '../img/home/3_4.jpg';

function Home(){
  return(
    <div className="home">

      <img className="img1" src={img1} alt="asdf"/>

      <div className="second">
        <div className="title">2020 EXCELLENT WORK</div>
        <NavLink exact to="/uh_8">
          <img className="img2_1" src={img2_1} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">강 내 은</div>
          <div className="pTitle_x">萬-歲 : 만-세</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">계원조형제 우수작</div>
        </div>
        <NavLink exact to="/han_2">
          <img className="img2_1" src={img2_2} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">Gradation</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">계원조형제 우수작</div>
        </div>
        <NavLink exact to="/uh_10">
          <img className="img2_1" src={img2_3} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">김 대 웅</div>
          <div className="pTitle">자연속에 존재한다는 것은</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">학과 우수작</div>
        </div>
        <NavLink exact to="/han_11">
          <img className="img2_1" src={img2_4} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">선 현 정</div>
          <div className="pTitle_x">성수동과 수제화</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">학과 우수작</div>
        </div>
        <NavLink exact to="/kim_11">
          <img className="img2_1" src={img2_5} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">최 민 하</div>
          <div className="pTitle_x">集單住居</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">학과 우수작</div>
        </div>
      </div>

      <div className="third">
        <div className="title">STUDIO</div>
        <div className="studioimg">
          <NavLink exact to="/studio_han">
            <img className="img3_1" src={img3_1} alt="asdf"/>
          </NavLink>
          <NavLink exact to="/studio_kim">
            <img className="img3_1" src={img3_2} alt="asdf"/>
          </NavLink>
          <NavLink exact to="/studio_uh">
            <img className="img3_1" src={img3_3} alt="asdf"/>
          </NavLink>
          <NavLink exact to="/studio_ai">
            <img className="img3_1" src={img3_4} alt="asdf"/>
          </NavLink>  
        </div>
      </div>

    </div>
  );
}

export default Home;