import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider } from './hooks/Context';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import QuestionPage from './pages/QuestionPage';
import ResultsAnalytics from './pages/ResultsAnalytics'
import Home from './pages/Home'
const url = 'https://opentdb.com/api.php?amount=10&type=boolean';


function App() {
  const [ questions, setQuestions ] = useState([]);

  useEffect(()=>{
    async function getTrivia() {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    getTrivia().then((data) => 
    setQuestions(data.results)
    ).then(()=>console.log(questions))
  },[])

  return (
    <div className="App">
      <Provider value={ { questions } }>
      <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='questions/q1' element={<QuestionPage />} />
      <Route path='results' element={<ResultsAnalytics />} />
      </Routes>
     </Router> 
     <div style={{textAlign: 'center', background: '#090909', padding: '5px'}}>Built with ❤️ by <strong>@clint360</strong> </div>
     </Provider>
    </div>
  );
}

export default App;
