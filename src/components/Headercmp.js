import '../scss/Headercmp.scss';
import {NavLink} from "react-router-dom";

function Headercmp(){
  return(
    <header>
      <nav>
        <div className="nav1">
          <NavLink exact to="/">KAD</NavLink>
        </div>
        <div className="nav2">
          <NavLink exact to="/about">ABOUT</NavLink>
        </div>
        <div className="nav3">
          <NavLink exact to="/studio_han">PROJECT</NavLink>
        </div>
        <div className="nav4">
          <NavLink exact to="/contact">CONTACT</NavLink>
        </div>
      </nav>
      <hr/>
    </header>
  );
}

export default Headercmp;