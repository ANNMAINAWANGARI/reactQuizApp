import React,{useState} from 'react'
import Header from './components/Header'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Trivia from './pages/Trivia'
function App() {
  const [name,setName] = useState();
  const fetchQuestions = ()=>{

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
          <Results/>
        </Route>
        <Route path='/trivia'>
          <Trivia/>
        </Route>
      </Switch>
     </div>
   </Router>
  )
  
  
 
}

export default App;
