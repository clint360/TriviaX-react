import React from 'react'
import './Results.css'
import { Link } from 'react-router-dom'


export default function Results({userScore, total}) {
  const decideColor = (score) => { 
    if(score < (total/2)) { 
      return '#ff2226'}
      else { return '#87cd56'} 
    }
  const colorSt = {
    color: decideColor(userScore)
  }
  return (
    <div id='main'>
        <div className='container'>
        <div className='bigcongratulations'>
            {userScore >= (total/2) ? 'Congratulations' : 'Sorry'}
        </div>
        <div className='youscored'>
            You Scored:
            <div className='score'>
            <span style={colorSt}>{userScore}</span>/{total}
            </div>
            <Link to='/results'><button>View Details</button></Link>
        </div>
        </div>
        </div>
  )
}

