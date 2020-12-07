import {NavLink} from "react-router-dom";

import '../scss/StudioKim.scss';

import kim1_1 from '../img/project/StudioKim/Kim_1/1.jpg';
import kim2_1 from '../img/project/StudioKim/Kim_2/1.jpg';
import kim3_1 from '../img/project/StudioKim/Kim_3/1.jpg';
import kim4_1 from '../img/project/StudioKim/Kim_4/1.jpg';
import kim5_1 from '../img/project/StudioKim/Kim_5/1.jpg';
import kim6_1 from '../img/project/StudioKim/Kim_6/1.jpg';
import kim7_1 from '../img/project/StudioKim/Kim_7/1.jpg';
import kim8_1 from '../img/project/StudioKim/Kim_8/1.jpg';
import kim9_1 from '../img/project/StudioKim/Kim_9/1.jpg';
import kim10_1 from '../img/project/StudioKim/Kim_10/1.jpg';
import kim11_1 from '../img/project/StudioKim/Kim_11/1.jpg';

function StudioKim(){
  return(
    <div className="StudioKim">

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

      <div className="stdName">STUDIO KIM</div>

      <div className="pjList">
        <NavLink exact to="/kim_1">
          <img className="thm1" src={kim1_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">창신동 패션 팩토리</div>
          <hr/>
          <div className="pjAuthor">최정은</div>
        </div>
        <NavLink exact to="/kim_2">
          <img className="thm1" src={kim2_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Add value to gunsan</div>
          <hr/>
          <div className="pjAuthor">황태웅</div>
        </div>
        <NavLink exact to="/kim_3">
          <img className="thm1" src={kim3_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Usadan-gil salad</div>
          <hr/>
          <div className="pjAuthor">김희지</div>
        </div>
        <NavLink exact to="/kim_4">
          <img className="thm1" src={kim4_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">安息處</div>
          <hr/>
          <div className="pjAuthor">박하림</div>
        </div>
        <NavLink exact to="/kim_5">
          <img className="thm1" src={kim5_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">公場 [청년 공장]</div>
          <hr/>
          <div className="pjAuthor">유수연</div>
        </div>
        <NavLink exact to="/kim_6">
          <img className="thm1" src={kim6_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">집합</div>
          <hr/>
          <div className="pjAuthor">유영서</div>
        </div>
        <NavLink exact to="/kim_7">
          <img className="thm1" src={kim7_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">백사정양</div>
          <hr/>
          <div className="pjAuthor">이서연</div>
        </div>
        <NavLink exact to="/kim_8">
          <img className="thm1" src={kim8_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">화훼마을</div>
          <hr/>
          <div className="pjAuthor">이유나</div>
        </div>
        <NavLink exact to="/kim_9">
          <img className="thm1" src={kim9_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">해방촌 콤마</div>
          <hr/>
          <div className="pjAuthor">이준범</div>
        </div>
        <NavLink exact to="/kim_10">
          <img className="thm1" src={kim10_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">서울 , (서울 쉼표)</div>
          <hr/>
          <div className="pjAuthor">이지민</div>
        </div>
        <NavLink exact to="/kim_11">
          <img className="thm1" src={kim11_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">集單住居</div>
          <hr/>
          <div className="pjAuthor">최민하</div>
        </div>
      </div>

    </div>
  );
}

export default StudioKim;