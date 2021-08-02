import React,{useState,useEffect} from 'react'
import { CircularProgress } from '@material-ui/core';
import Question from '../components/Question'
import './Trivia.css'
function Trivia({name,questions,score,setScore,setQuestions}) {
 const [options,setOptions]=useState();
 const [currQues,setCurrQues]=useState(0);
 useEffect(() => {
  setOptions(
   questions && handleShuffle([questions[currQues]?.correct_answer,...questions[currQues]?.incorrect_answers])
  );
 }, [currQues,questions])
 const handleShuffle=(options)=>{
 return options.sort(()=>Math.random() -0.5)
 }
 return(
  <div className='trivia'>
   <span className='subtitle'>Welcome,{name}</span>
  {
   questions?(
    <>
    <Question currQues={currQues} setCurrQues={setCurrQues} questions={questions}options={options}correct={questions[currQues]?.correct_answer}score={score}setScore={setScore}setQuestions={setQuestions}/>
    </>
   ):(
    <CircularProgress style={{margin:100}} color='inherit' size={150} thickness={1} />
   )
  }
  </div>
 );
};

export default Trivia
