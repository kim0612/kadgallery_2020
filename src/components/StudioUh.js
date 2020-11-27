import {NavLink} from "react-router-dom";

import '../scss/StudioUh.scss';
import thm1 from '../img/ratio_169.jpg';


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
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
        <img className="thm1" src={thm1} alt="asdf"/>
        <div className="subs">
          <div className="pjName">DOSAN MUSEUM</div>
          <hr/>
          <div className="pjAuthor">김철수</div>
        </div>
      </div>

    </div>
  );
}

export default StudioUh;