import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './QuestionPage.css'
import './Navbar.css';
import ProgressBar from '../Components/ProgressBar';
import axios from 'axios';
import { finalScoreContext } from '../App';
import { fromapi } from '../Data/api';
import Results from './Results';
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";

export default function QuestionPage() {
  // const { userFinalScore } = useContext(finalScoreContext);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userScore, setUserScore] = useState(parseInt(0));
  const [userResponse, setUserResponse] = useState("");
  const [localdata, setData] = useState(fromapi); 
  useEffect(() => {
   axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
   .then((response) => {
    const localdata = [...response.data.results];
    setData((prevArray) => prevArray, localdata);
    console.log(localdata);
    console.log(localdata.length)
   });
 }, [])

  const setToTrue = (userResponse, userScore) => {
    userResponse = "True"
    setUserResponse(userResponse)
    console.log(userResponse)
    compare(userResponse, userScore);
    nexter(count);
  }

  const setToFalse = (userResponse, userScore) => {
    userResponse = "False"
    setUserResponse(userResponse, userScore)
    console.log(userResponse)
    compare(userResponse, userScore);
    nexter(count);
  }

  const compare = (userResponse, userScore) => {
    if (userResponse === localdata[count].correct_answer) {
      setUserScore((prevScore) => parseInt(prevScore + 1))
    } else {
      setUserScore((prevScore) => prevScore + 0);
    }
    console.log(userScore)
  }

  const testData = { bgcolor: "#6a1b9a", completed: progress };
  const nexter = (count) => {
    setTimeout(() => {setCount(count + 1)}, 200)
    console.log(count);
    setProgress(progress+(100/localdata.length))
  }

 if (count !== localdata.length - 1 ) { return ( 
        <div className='main'>
        <div id='navbar'> 
      <div className='logo'>
     <p>Trivia-X</p> 
      </div>
      <div className="lists">
       <div>Progress:</div>
       <div><ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
       </div>
       </div>
      </div>
        <div className='area'>
        <div className='questionbody'>
            <div className='questionbody_header'>
                <div className='questionnumber'>
                   <p>Question Number {count + 1} of {localdata.length}</p> 
                </div>
                <div className='category'>
                    <p>Category: {localdata[count].category}</p>
                </div>
                <div className='source'>
              <div>Source:</div><div><img src='https://opentdb.com/images/logo.png' alt='Open Trivia' width={100}></img></div>
                </div>
            </div>
            <div className='questionsection' dangerouslySetInnerHTML={{__html: localdata[count].question}}/>
                
            <div className='response'>
            {count === localdata.length - 1 ? <Link to='/results'><button className='button true'>True</button></Link> : <button className='button true' onClick={()=>{setToTrue(userResponse, userScore)}}>True</button>}
            {count === localdata.length - 1 ? <Link to='/results'><button className='button false'>False</button></Link> :    <button className='button false' onClick={()=>{setToFalse(userResponse, userScore)}}>False</button>}
            </div>
        </div>
        <div className='next'>
           {count === localdata.length - 1 ? <Link to='/results'><button>Next</button></Link> : <button onClick={() => {nexter(count)}}>Next</button>}
        </div>
        </div>
    </div>
  )
} else {
 return <Results userScore={userScore} total={localdata.length}/>
}
}