import React,{useState} from 'react'
import Header from './components/Header'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Trivia from './pages/Trivia'
import axios from 'axios'
function App() {
  const [name,setName] = useState();
  const [score,setScore] = useState('');
  const [questions,setQuestions]= useState(0)
  const fetchQuestions = async(category='',difficulty='')=>{
  const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
   setQuestions(data.results);
  }
  return(
    <Router>
     <div className='app'>
      <Header/> 
      <Switch>
        <Route path='/' exact>
          <Home name={name}setName={setName}fetchQuestions={fetchQuestions}/>
        </Route>
        <Route path='/results'>
          <Results score={score} name={name}/>
        </Route>
        <Route path='/trivia'>
          <Trivia name={name}questions={questions}score={score}setScore={setScore}setQuestions={setQuestions}/>
        </Route>
      </Switch>
     </div>
   </Router>
  )
  
  
 
}

export default App;
