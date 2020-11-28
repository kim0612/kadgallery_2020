import {Switch, Route} from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import StudioHan from '../components/StudioHan';
import StudioKim from '../components/StudioKim';
import StudioUh from '../components/StudioUh';
import StudioAi from '../components/StudioAi';

import Han1 from './individual/Han1';
import Han2 from './individual/Han2';


function Content(){
  return(
    <div className="content">

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/studio_han">
          <StudioHan />
        </Route>
        <Route exact path="/studio_kim">
          <StudioKim />
        </Route>
        <Route exact path="/studio_uh">
          <StudioUh />
        </Route>
        <Route exact path="/studio_ai">
          <StudioAi />
        </Route>
        <Route exact path="/han_1">
          <Han1/>
        </Route>
        <Route exact path="/han_2">
          <Han2/>
        </Route>
      </Switch>

    </div>
  );
}

export default Content;