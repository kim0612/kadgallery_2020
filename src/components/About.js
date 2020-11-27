import '../scss/About.scss';

import img1 from "../img/about/1.jpg";
import img2 from "../img/about/2.svg";

function About(){
  return(
    <div className="About">
      <img src={img1} alt="poster" className="img1"/>
      <img src={img2} alt="description" className="img2"/>
    </div>
  );
}

export default About;