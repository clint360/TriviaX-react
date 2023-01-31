import React from 'react';
import { fromapi } from '../Data/api';

export default function ResultsAnalytics () {
   const mainStyle = {
    backgroundColor: 'black',
    height: '100vh',
    fontFamily: 'Poppins'
   }

   const resultStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '10px', 
   }

   const column = {
    width: '6%'
   }
   
   const column1 = {
    width: '50%'
   }

   const column2 = {
    width: '20%'
   }

   const column3 = {
    width: '10%'
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
        <p style={column3}>Answer</p>
        <p style={column4}>User Answer</p>
        </div>
        <br />
        <div>{fromapi.map((item, index) => {
            return (
                <div style={resultStyle}>
         <p style={column}>{(index + 1)}</p>
         <p style={column1} dangerouslySetInnerHTML={{__html: item.question}}/>
         <p style={column2}>{item.category}</p>
         <p style={column3}>{item.correct_answer}</p>
         </div>
          )
        })}</div>
    </div>
  )
}
