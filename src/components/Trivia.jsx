import React from 'react'
import './Trivia.css'
function Trivia() {
 return (
  <div className='trivia'>
   <div className='question'>What color is the sky?</div>
   <div className='answers'>
    <div className='answer'>Blue</div>
    <div className="answer">White</div>
    <div className="answer">Black</div>
    <div className="answer">Colorless</div>
   </div>
  </div>
 )
}

export default Trivia
