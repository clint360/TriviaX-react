import './App.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import Q7 from './pages/Q7';
import Q8 from './pages/Q8';
import Q9 from './pages/Q9';
import Q10 from './pages/Q10';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Q1/>
     {/* <Router>
     <Route path='/' >
      <Home />
      </Route>
      <Route path='/Q1' >
      <Q1 />
      </Route>
      <Route path='/Q2' >
      <Q2 />
      </Route>
      <Route path='/Q3' >
      <Q3 />
      </Route>
      <Route path='/Q4' >
      <Q4 />
      </Route>
      <Route path='/Q5' >
      <Q5 />
      </Route>
      <Route path='/Q6' >
      <Q6 />
      </Route>
      <Route path='/Q7' >
      <Q7 />
      </Route>
      <Route path='/Q8' >
      <Q8 />
      </Route>
      <Route path='/Q9' >
      <Q9 />
      </Route>
      <Route path='/Q10' >
      <Q10 />
      </Route>
     </Router> */}
    </div>
  );
}

export default App;
