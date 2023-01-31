import React from 'react';
import { fromapi } from '../Data/api';

export default function ResultsAnalytics () {
   const mainStyle = {
    backgroundColor: 'black',
    minHeight: '95.8vh',
    height: 'auto',
    fontFamily: 'Poppins',
    padding: '10px'
   }

   const resultStyle = {
    display: 'flex',
    paddingBottom: '10px', 
   }

   const column = {
    width: '6%'
   }
   
   const column1 = {
    width: '50%'
   }

   const column2 = {
    width: '20%',
    minWidth: '50px',
    overflow: 'hidden',
    marginRight: '10px'
   }

   const column3 = {
    width: '10%',
    minWidth: '50px',
    overflow: 'hidden',
    marginRight: '10px'
   }
   
   const column4 = {
    width: '10%'
   }



  return (
    <div style={mainStyle}>
        <h1>Results Breakdown</h1> <br/>
        <div style={resultStyle}>
        <p style={column}>Q No</p>
        <p style={column1}>Question</p>
        <p style={column2}>Category</p>
        <p style={column3}>Corr. Answer</p>
        <p style={column4}>Your Answer</p>
        </div>
        <br />
        <div>{fromapi.map((item, index) => {
            return (
                <div style={resultStyle}>
         <p style={column}>{(index + 1)}</p>
         <p style={column1} dangerouslySetInnerHTML={{__html: item.question}}/>
         <p style={column2}>{item.category}</p>
         <p style={column3}>{item.correct_answer}</p>
         <p style={column4}>{item.user_answer}</p>
         </div>
          )
        })}</div>
    </div>
  )
}
