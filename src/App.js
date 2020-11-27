import {BrowserRouter} from "react-router-dom";

import Headercmp from './components/Headercmp'
import Content from './components/Content'
import Footercmp from './components/Footercmp'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Headercmp/>
        <Content/>
        <Footercmp/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
