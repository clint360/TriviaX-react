import React from 'react'
import logo from '../images/x.png';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <section id='main'>
        <div className='logo-section'>
         <img src={logo} className="logo"></img>
         <h1>Trivia-X Quiz</h1>
         </div>
         <div className="desc">
         <p>Showcase your knowledge by surfing through 10 Yes/No questions proving your worth</p>
        <Link to='/questions/q1'><button className='startnow'>Start Now</button></Link> 
         </div>
        </section>
    </div>
  )
}
