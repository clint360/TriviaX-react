import React from 'react'
import './Results.css'

export default function Results() {
  return (
    <div id='main'>
        <div className='container'>
        <div className='bigcongratulations'>
            Congratulations
        </div>
        <div className='youscored'>
            You Scored:
            <div className='score'>
            0/10
            </div>
            <button>Share Results</button>
        </div>
        </div>
        </div>
  )
}
