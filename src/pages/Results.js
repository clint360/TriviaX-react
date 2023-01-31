import React from 'react'
import './Results.css'

export default function Results({userScore}) {
  const decideColor = (userScore) => { 
    if({userScore} < 5) { 
      return 'red'}
      else { return 'blue'} 
    }
  const colorSt = {
    color: {decideColor}
  }
  return (
    <div id='main'>
        <div className='container'>
        <div className='bigcongratulations'>
            {userScore >= 5 ? 'Congratulations' : 'Sorry'}
        </div>
        <div className='youscored'>
            You Scored:
            <div className='score'>
            <span style={colorSt}>{userScore}</span>/10
            </div>
            <button>View Details</button>
        </div>
        </div>
        </div>
  )
}

