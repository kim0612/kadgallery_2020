import {NavLink} from "react-router-dom";

import '../scss/Home.scss';

import img1 from '../img/home/1.jpg';
import img2_1 from '../img/home/2_1.jpg';
import han2_1 from '../img/project/StudioHan/Han_2/1.jpg';
import img2_3 from '../img/home/2_3.jpg';
import img2_4 from '../img/home/2_4.jpg';
import img2_5 from '../img/home/2_5.jpg';
import img2_6 from '../img/home/2_6.jpg';
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
        <NavLink exact to="/han_1">
          <img className="img2_1" src={img2_1} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">DOSAN MUSEUM</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
        </div>
        <NavLink exact to="/han_2">
          <img className="img2_1" src={han2_1} alt="asdf"/>
        </NavLink>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">Gradation</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
        </div>
        <img className="img2_1" src={img2_3} alt="asdf"/>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">DOSAN MUSEUM</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
        </div>
        <img className="img2_1" src={img2_4} alt="asdf"/>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">DOSAN MUSEUM</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
        </div>
        <img className="img2_1" src={img2_5} alt="asdf"/>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">DOSAN MUSEUM</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
        </div>
        <img className="img2_1" src={img2_6} alt="asdf"/>
        <hr/>
        <div className="subs">
          <div className="name">백 승 관</div>
          <div className="pTitle">DOSAN MUSEUM</div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="none"></div>
          <div className="pLeader">STUDIO HAN</div>
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