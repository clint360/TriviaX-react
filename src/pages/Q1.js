import React from 'react';
import { Link } from 'react-router-dom';
import './Q.css';

export default function Q1() {
  return (
    <div><section id='main' style={{background: "purple"}}>
      <div className='slider'>
      <i class="fa-solid fa-circle-chevron-left"></i>
      <div className='workingsection'>
      <div className='question'>
        White light is dangerous White light is dangerous White light is dangerous
      </div>
      <br />
      <div className='response'>
        <button>Yes</button>
        <button>No</button>
        </div>
        </div>
        <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
        <div className='nextdiv'>
        Correct <br />  
        <button>Next</button>   
        </div> 
      </section>
    </div>
  )
}
