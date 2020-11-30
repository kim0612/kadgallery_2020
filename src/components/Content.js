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
import Han3 from './individual/Han3';
import Han4 from './individual/Han4';
import Han5 from './individual/Han5';
import Han6 from './individual/Han6';
import Han7 from './individual/Han7';
import Han8 from './individual/Han8';
import Han9 from './individual/Han9';
import Han10 from './individual/Han10';
import Han11 from './individual/Han11';
import Han12 from './individual/Han12';
import Han13 from './individual/Han13';

import Kim1 from './individual/Kim1';
import Kim2 from './individual/Kim2';
import Kim3 from './individual/Kim3';
import Kim4 from './individual/Kim4';
import Kim5 from './individual/Kim5';
import Kim6 from './individual/Kim6';
import Kim7 from './individual/Kim7';
import Kim8 from './individual/Kim8';
import Kim9 from './individual/Kim9';
import Kim10 from './individual/Kim10';
import Kim11 from './individual/Kim11';

import Uh1 from './individual/Uh1';
import Uh2 from './individual/Uh2';
import Uh3 from './individual/Uh3';
import Uh4 from './individual/Uh4';
import Uh5 from './individual/Uh5';
import Uh6 from './individual/Uh6';
import Uh7 from './individual/Uh7';
import Uh8 from './individual/Uh8';
import Uh9 from './individual/Uh9';
import Uh10 from './individual/Uh10';

import Ai1 from './individual/Ai1';
import Ai2 from './individual/Ai2';
import Ai3 from './individual/Ai3';
import Ai4 from './individual/Ai4';
import Ai5 from './individual/Ai5';
import Ai6 from './individual/Ai6';
import Ai7 from './individual/Ai7';
import Ai8 from './individual/Ai8';
import Ai9 from './individual/Ai9';
import Ai10 from './individual/Ai10';
import Ai11 from './individual/Ai11';

function Content(){
  return(
    <div className="content">

      <Switch>
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

        {/* StudioHan */}
        <Route exact path="/han_1">
          <Han1/>
        </Route>
        <Route exact path="/han_2">
          <Han2/>
        </Route>
        <Route exact path="/han_3">
          <Han3/>
        </Route>
        <Route exact path="/han_4">
          <Han4/>
        </Route>
        <Route exact path="/han_5">
          <Han5/>
        </Route>
        <Route exact path="/han_6">
          <Han6/>
        </Route>
        <Route exact path="/han_7">
          <Han7/>
        </Route>
        <Route exact path="/han_8">
          <Han8/>
        </Route>
        <Route exact path="/han_9">
          <Han9/>
        </Route>
        <Route exact path="/han_10">
          <Han10/>
        </Route>
        <Route exact path="/han_11">
          <Han11/>
        </Route>
        <Route exact path="/han_12">
          <Han12/>
        </Route>
        <Route exact path="/han_13">
          <Han13/>
        </Route>

        {/* StudioKim */}
        <Route exact path="/kim_1">
          <Kim1/>
        </Route>
        <Route exact path="/kim_2">
          <Kim2/>
        </Route>
        <Route exact path="/kim_3">
          <Kim3/>
        </Route>
        <Route exact path="/kim_4">
          <Kim4/>
        </Route>
        <Route exact path="/kim_5">
          <Kim5/>
        </Route>
        <Route exact path="/kim_6">
          <Kim6/>
        </Route>
        <Route exact path="/kim_7">
          <Kim7/>
        </Route>
        <Route exact path="/kim_8">
          <Kim8/>
        </Route>
        <Route exact path="/kim_9">
          <Kim9/>
        </Route>
        <Route exact path="/kim_10">
          <Kim10/>
        </Route>
        <Route exact path="/kim_11">
          <Kim11/>
        </Route>

        {/* StudioUH */}
        <Route exact path="/uh_1">
          <Uh1/>
        </Route>
        <Route exact path="/uh_2">
          <Uh2/>
        </Route>
        <Route exact path="/uh_3">
          <Uh3/>
        </Route>
        <Route exact path="/uh_4">
          <Uh4/>
        </Route>
        <Route exact path="/uh_5">
          <Uh5/>
        </Route>
        <Route exact path="/uh_6">
          <Uh6/>
        </Route>
        <Route exact path="/uh_7">
          <Uh7/>
        </Route>
        <Route exact path="/uh_8">
          <Uh8/>
        </Route>
        <Route exact path="/uh_9">
          <Uh9/>
        </Route>
        <Route exact path="/uh_10">
          <Uh10/>
        </Route>

        {/* StudioAI */}
        <Route exact path="/ai_1">
          <Ai1/>
        </Route>
        <Route exact path="/ai_2">
          <Ai2/>
        </Route>
        <Route exact path="/ai_3">
          <Ai3/>
        </Route>
        <Route exact path="/ai_4">
          <Ai4/>
        </Route>
        <Route exact path="/ai_5">
          <Ai5/>
        </Route>
        <Route exact path="/ai_6">
          <Ai6/>
        </Route>
        <Route exact path="/ai_7">
          <Ai7/>
        </Route>
        <Route exact path="/ai_8">
          <Ai8/>
        </Route>
        <Route exact path="/ai_9">
          <Ai9/>
        </Route>
        <Route exact path="/ai_10">
          <Ai10/>
        </Route>
        <Route exact path="/ai_11">
          <Ai11/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default Content;