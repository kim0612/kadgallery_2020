import {NavLink} from "react-router-dom";

import '../scss/StudioAi.scss';

import ai1_1 from '../img/project/StudioAi/Ai_1/1.jpg';
import ai2_1 from '../img/project/StudioAi/Ai_2/1.jpg';
import ai3_1 from '../img/project/StudioAi/Ai_3/1.jpg';
import ai4_1 from '../img/project/StudioAi/Ai_4/1.jpg';
import ai5_1 from '../img/project/StudioAi/Ai_5/1.jpg';
import ai6_1 from '../img/project/StudioAi/Ai_6/1.jpg';
import ai7_1 from '../img/project/StudioAi/Ai_7/1.jpg';
import ai8_1 from '../img/project/StudioAi/Ai_8/1.jpg';
import ai9_1 from '../img/project/StudioAi/Ai_9/1.jpg';
import ai10_1 from '../img/project/StudioAi/Ai_10/1.jpg';
import ai11_1 from '../img/project/StudioAi/Ai_11/1.jpg';


function StudioAi(){
  return(
    <div className="StudioAi">

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

      <div className="stdName">STUDIO A.I</div>

      <div className="pjList">
        <NavLink exact to="/ai_1">
          <img className="thm1" src={ai1_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">예술가들을 위한 예술공간</div>
          <hr/>
          <div className="pjAuthor">오은비</div>
        </div>
        <NavLink exact to="/ai_2">
          <img className="thm1" src={ai2_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Active senior Fashion Designer＆Model Entertainment</div>
          <hr/>
          <div className="pjAuthor">김예진</div>
        </div>
        <NavLink exact to="/ai_3">
          <img className="thm1" src={ai3_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">보석 상자</div>
          <hr/>
          <div className="pjAuthor">남지율</div>
        </div>
        <NavLink exact to="/ai_4">
          <img className="thm1" src={ai4_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">소품집</div>
          <hr/>
          <div className="pjAuthor">박채원</div>
        </div>
        <NavLink exact to="/ai_5">
          <img className="thm1" src={ai5_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">The Weaving of Shade</div>
          <hr/>
          <div className="pjAuthor">한재선</div>
        </div>
        <NavLink exact to="/ai_6">
          <img className="thm1" src={ai6_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">함께 움직이는 다독임</div>
          <hr/>
          <div className="pjAuthor">이서영</div>
        </div>
        <NavLink exact to="/ai_7">
          <img className="thm1" src={ai7_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">子時(대구 지하철 화재 추모관)</div>
          <hr/>
          <div className="pjAuthor">김민정</div>
        </div>
        <NavLink exact to="/ai_8">
          <img className="thm1" src={ai8_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">Demilitarized</div>
          <hr/>
          <div className="pjAuthor">김현호</div>
        </div>
        <NavLink exact to="/ai_9">
          <img className="thm1" src={ai9_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">계원예대 가족_교수와 선배와 새내기, 0학년 적응하기</div>
          <hr/>
          <div className="pjAuthor">손연주</div>
        </div>
        <NavLink exact to="/ai_10">
          <img className="thm1" src={ai10_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">기억의 조각</div>
          <hr/>
          <div className="pjAuthor">이다영</div>
        </div>
        <NavLink exact to="/ai_11">
          <img className="thm1" src={ai11_1} alt="asdf"/>
        </NavLink>
        <div className="subs">
          <div className="pjName">만트라</div>
          <hr/>
          <div className="pjAuthor">김도현</div>
        </div>
      </div>

    </div>
  );
}

export default StudioAi;