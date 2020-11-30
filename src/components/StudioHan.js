import {NavLink} from "react-router-dom";

import '../scss/StudioHan.scss';

import han1_1 from '../img/project/StudioHan/Han_1/1.jpg';
import han2_1 from '../img/project/StudioHan/Han_2/1.jpg';
import han3_1 from '../img/project/StudioHan/Han_3/1.jpg';
import han4_1 from '../img/project/StudioHan/Han_4/1.jpg';
import han5_1 from '../img/project/StudioHan/Han_5/1.jpg';
import han6_1 from '../img/project/StudioHan/Han_6/1.jpg';
import han7_1 from '../img/project/StudioHan/Han_7/1.jpg';
import han8_1 from '../img/project/StudioHan/Han_8/1.jpg';
import han9_1 from '../img/project/StudioHan/Han_9/1.jpg';
import han10_1 from '../img/project/StudioHan/Han_10/1.jpg';
import han11_1 from '../img/project/StudioHan/Han_11/1.jpg';
import han12_1 from '../img/project/StudioHan/Han_12/1.jpg';
import han13_1 from '../img/project/StudioHan/Han_13/1.jpg';


function StudioHan(){
  return(
    <div className="StudioHan">

      <div className="underHeader">
        <div className="nav1">
          <NavLink exact to="/studio_han">STUDIO HAN</NavLink>
        </div>
        <div className="nav2">
          <NavLink exact to="/studio_kim">STUDIO KIM</NavLink>
        </div>
        <div className="nav3">
          <NavLink exact to="/studio_uh">STUDIO UH</NavLink>
        </div>
        <div className="nav4">
          <NavLink exact to="/studio_ai">STUDIO A.I</NavLink>
        </div>
      </div>

      <div className="stdName">STUDIO HAN</div>

      <div className="pjList">
        <NavLink exact to="/han_1">
          <img className="thm1" src={han1_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">시네마 빌리지</div>
          <hr/>
          <div className="pjAuthor">박경서</div>
        </div>
        <NavLink exact to="/han_2">
          <img className="thm1" src={han2_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Gradation</div>
          <hr/>
          <div className="pjAuthor">백승관</div>
        </div>
        <NavLink exact to="/han_3">
          <img className="thm1" src={han3_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">INSERT JOY</div>
          <hr/>
          <div className="pjAuthor">이수진</div>
        </div>
        <NavLink exact to="/han_4">
          <img className="thm1" src={han4_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Landscape of Memory </div>
          <hr/>
          <div className="pjAuthor">Hee jin son</div>
        </div>
        <NavLink exact to="/han_5">
          <img className="thm1" src={han5_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">New leisure life</div>
          <hr/>
          <div className="pjAuthor">김유상</div>
        </div>
        <NavLink exact to="/han_6">
          <img className="thm1" src={han6_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">SHARE the SQURE!</div>
          <hr/>
          <div className="pjAuthor">홍주비</div>
        </div>
        <NavLink exact to="/han_7">
          <img className="thm1" src={han7_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">인천 우체국</div>
          <hr/>
          <div className="pjAuthor">신승민</div>
        </div>
        <NavLink exact to="/han_8">
          <img className="thm1" src={han8_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">AND, GATHER(그리고, 모이다)</div>
          <hr/>
          <div className="pjAuthor">유지은</div>
        </div>
        <NavLink exact to="/han_9">
          <img className="thm1" src={han9_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">환기</div>
          <hr/>
          <div className="pjAuthor">정재은</div>
        </div>
        <NavLink exact to="/han_10">
          <img className="thm1" src={han10_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">CONTEMPORT</div>
          <hr/>
          <div className="pjAuthor">김수민</div>
        </div>
        <NavLink exact to="/han_11">
          <img className="thm1" src={han11_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">성수동과 수제화</div>
          <hr/>
          <div className="pjAuthor">선현정</div>
        </div>
        <NavLink exact to="/han_12">
          <img className="thm1" src={han12_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">SHARE In share</div>
          <hr/>
          <div className="pjAuthor">유민지</div>
        </div>
        <NavLink exact to="/han_13">
          <img className="thm1" src={han13_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">대한민국 근대 민주주의 역사 기념관</div>
          <hr/>
          <div className="pjAuthor">구인서</div>
        </div>
      </div>

    </div>
  );
}

export default StudioHan;