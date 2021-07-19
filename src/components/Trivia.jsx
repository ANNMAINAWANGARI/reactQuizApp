import React,{useState,useEffect} from 'react'
import './Trivia.css'
function Trivia({data,setStop,setQuestionNum,questionNum}) {
 const [question,setQuestion]=useState(null);
 const [selectedAns,setSelectedAns]=useState(null);
 const [className,setClassName]=useState('answer')
 const handleClick=(q)=>{
 setSelectedAns(q);
 setClassName('answer active');
 setTimeout(()=>{
  setClassName(q.correct? 'answer correct' : 'answer wrong')
 },1000);
 setTimeout(()=>{
 if(q.correct){
 setQuestionNum((prev)=>prev + 1)
 setSelectedAns(null)
 }else{
 setStop(true)
 }
 },3000)
 }
 useEffect(()=>{
  setQuestion(data[questionNum -1])
 },[data,questionNum])
 return (
  <div className='trivia'>
   <div className='question'>{question?.question}</div>
   <div className='answers'>
    {question?.answers.map((q)=>(
     <div className={selectedAns=== q? className:'answer'} onClick={()=>handleClick(q)}>{q.text}</div>
    ))}
   </div>
  </div>
 )
}

export default Trivia
