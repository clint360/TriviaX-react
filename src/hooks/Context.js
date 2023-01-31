import React, { createContext, useState } from "react"; 

const quizContext = createContext();


export default function Context() {
    const [ userFinalScore, setUserFinalScore ] = useState(0);
  return (
    <div>Context</div>
  )
}
