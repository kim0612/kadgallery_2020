import {NavLink} from "react-router-dom";

import '../scss/StudioUh.scss';

import uh1_1 from '../img/project/StudioUh/Uh_1/1.jpg';
import uh2_1 from '../img/project/StudioUh/Uh_2/1.jpg';
import uh3_1 from '../img/project/StudioUh/Uh_3/1.jpg';
import uh4_1 from '../img/project/StudioUh/Uh_4/1.jpg';
import uh5_1 from '../img/project/StudioUh/Uh_5/1.jpg';
import uh6_1 from '../img/project/StudioUh/Uh_6/1.jpg';
import uh7_1 from '../img/project/StudioUh/Uh_7/1.jpg';
import uh8_1 from '../img/project/StudioUh/Uh_8/1.jpg';
import uh9_1 from '../img/project/StudioUh/Uh_9/1.jpg';
import uh10_1 from '../img/project/StudioUh/Uh_10/1.jpg';


function StudioUh(){
  return(
    <div className="StudioUh">

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

      <div className="stdName">STUDIO UH</div>


      <div className="pjList">
        <NavLink exact to="/uh_1">
          <img className="thm1" src={uh1_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">소행성</div>
          <hr/>
          <div className="pjAuthor">김승현</div>
        </div>
        <NavLink exact to="/uh_2">
          <img className="thm1" src={uh2_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">경상북도 향토학숙 계획안</div>
          <hr/>
          <div className="pjAuthor">정민수</div>
        </div>
        <NavLink exact to="/uh_3">
          <img className="thm1" src={uh3_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">오순도순 노인문화 복지관</div>
          <hr/>
          <div className="pjAuthor">김창석</div>
        </div>
        <NavLink exact to="/uh_4">
          <img className="thm1" src={uh4_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">SOVEREIGN 사옥</div>
          <hr/>
          <div className="pjAuthor">김황조</div>
        </div>
        <NavLink exact to="/uh_5">
          <img className="thm1" src={uh5_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">in CIRCLE_박달동 자연 속 오감 유치원 계획안</div>
          <hr/>
          <div className="pjAuthor">김수빈</div>
        </div>
        <NavLink exact to="/uh_6">
          <img className="thm1" src={uh6_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">대면(對面)하다 : 망국의 역사, 경술년의 치욕과 마주하다</div>
          <hr/>
          <div className="pjAuthor">김주익</div>
        </div>
        <NavLink exact to="/uh_7">
          <img className="thm1" src={uh7_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">사당 5동 슈필리움</div>
          <hr/>
          <div className="pjAuthor">최재혁</div>
        </div>
        <NavLink exact to="/uh_8">
          <img className="thm1" src={uh8_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">萬-歲 : 만-세</div>
          <hr/>
          <div className="pjAuthor">강내은</div>
        </div>
        <NavLink exact to="/uh_9">
          <img className="thm1" src={uh9_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">너나우리 - 여주시 은퇴자 집합주거 계획안</div>
          <hr/>
          <div className="pjAuthor">도승규</div>
        </div>
        <NavLink exact to="/uh_10">
          <img className="thm1" src={uh10_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">자연속에 존재한다는 것은</div>
          <hr/>
          <div className="pjAuthor">김대웅</div>
        </div>
      </div>

    </div>
  );
}

export default StudioUh;