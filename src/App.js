import React,{useState} from 'react'
import Trivia from './components/Trivia'
import './App.css';
function App() {
  const [questionNum,setQuestionNum]=useState(5);
  const data =[
    {
      id:1,
      question:'Who is the first president of Kenya?',
      answers:[
        {text:'Uhuru Kenyatta',
         correct:false
        },
        {text:'Jaramogi Oginga',
         correct:false},
        {text:'Jomo Kenyatta',
        correct:true},
        {text:'Raila Odinga',
        correct:false}
      ]
    },
    {
      id:2,
      question:'What color is the sky?',
      answers:[
        {text:'green',
         correct:false
        },
        {text:'white',
         correct:false},
        {text:'blue',
        correct:true},
        {text:'yellow',
        correct:false}
      ]
    },
    {
      id:3,
      question:'What are greenhouses made of?',
      answers:[
        {text:'bricks',
         correct:false
        },
        {text:'cotton',
         correct:false},
        {text:'paper',
        correct:true},
        {text:'wood',
        correct:false}
      ]
    },
    {
      id:4,
      question:'Which is the best programming pc?',
      answers:[
        {text:'Mac',
         correct:false
        },
        {text:'Windows',
         correct:false},
        {text:'Linux',
        correct:true},
        {text:'Ubuntu',
        correct:false}
      ]
    }
  ]
  const cash =[
    {id:1,amount:'$ 1000000'},
    {id:2,amount:'$ 2000000'},
    {id:3,amount:'$ 3000000'},
    {id:4,amount:'$ 4000000'},
    {id:5,amount:'$ 5000000'},
    {id:6,amount:'$ 6000000'},
    {id:7,amount:'$ 7000000'},
    {id:8,amount:'$ 800000000'},
    {id:9,amount:'$ 90000000000'},
    {id:10,amount:'$ 1000000000000'}
    ,
  ].reverse();
  return (
    <div className="app">
     <div className='app_left'>
       <div className='appLeft_top'>
         <div className='appLeft_header'>
           <span className='appLeft_spanOne'>QUIZ</span>
           <span className='appLeft_spanTwo'>
            TIME
           </span>
         </div>
         <div className='app_timer'>30</div>
       </div>
       <div className='appLeft_bottom'>
         <Trivia/>
       </div>
     </div>
     <div className='app_right'>
       <ul className='moneyList'>
         {cash.map((c)=>(
           <li className={questionNum === c.id ? 'moneyList_item active':'moneyList_item'}>
           <span className='moneyList_number'>{c.id}</span>
           <span className='moneyList_amount'>{c.amount}</span>
         </li>
         ))}
         
       </ul>
     </div>
    </div>
  );
}

export default App;
