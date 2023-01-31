import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import QuestionPage from './pages/QuestionPage';
import ResultsAnalytics from './pages/ResultsAnalytics'
import Home from './pages/Home'

export const finalScoreContext = createContext(null);

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='questions/q1' element={<QuestionPage />} />
      <Route path='results' element={<ResultsAnalytics />} />
      </Routes>
     </Router> 
     <div style={{textAlign: 'center', background: '#090909', padding: '5px'}}>Built with ❤️ by Clint </div>
    </div>
  );
}

export default App;
