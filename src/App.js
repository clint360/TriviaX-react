import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import QuestionPage from './pages/QuestionPage';
import Results from './pages/Results'
import Home from './pages/Home'

export const finalScoreContext = createContext(null);

function App() {
  const [userFinalScore, setUserFinalScore] = useState(0);
  return (
    <finalScoreContext.Provider>
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='questions/q1' element={<QuestionPage />} />
      <Route path='results' element={<Results />} />
      </Routes>
     </Router> 
    </div>
    </finalScoreContext.Provider>
  );
}

export default App;
