import './App.css';
import Navbar from './components/Navbar';
import Results from './pages/Results'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Results />
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
