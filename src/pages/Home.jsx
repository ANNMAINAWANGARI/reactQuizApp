import { Button, MenuItem, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import Quiz from '../assets/quiz.png'
import './Home.css'
import Categories from '../Data/Categories'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'

function Home({name,setName, fetchQuestions}) {

 const [category,setCategory]=useState('');
 const [difficulty,setDifficulty]=useState('');
 const [error,setError] = useState(false);
 const history = useHistory();
 
 const handleSubmit=()=>{
  if(!category || !difficulty || !name){
  setError(true);
  return;
  }else{
  setError(false)
  fetchQuestions(category,difficulty);
  history.push('/trivia')
  }
 }
 return (
  <div className='home'>
   <div className='settings'>
    <span style={{fontSize:30}}>Quiz Settings</span>
    <div className="settings_select">
     {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
     <TextField style={{marginBottom:25}}label='Enter your name'variant='outlined'onChange={(e)=>setName(e.target.value)}fullWidth margin="normal"InputLabelProps={{shrink: true,}}/>
     <TextField 
     select label='Select Category'fullWidth margin="normal"InputLabelProps={{shrink: true,}} variant='outlined'value={category}style={{marginBottom:30}} onChange={(e)=>{setCategory(e.target.value)}}
     >
      {
       Categories.map((cat)=>(
        <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
       ))
      }
     </TextField>
     <TextField select label='Select Difficulty' value={difficulty}variant='outlined'fullWidth margin="normal"InputLabelProps={{shrink: true,}} style={{marginBottom:30}} onChange={(e)=>{setDifficulty(e.target.value)}}>
      <MenuItem key='Easy' value='easy'>Easy</MenuItem>
      <MenuItem key='Medium' value='medium'>Medium</MenuItem>
      <MenuItem key='Hard' value='hard'>Hard</MenuItem>
     </TextField>
     <Button variant='contained' color='primary' size='large'onClick={handleSubmit}>Start Quiz</Button>
    </div>
   </div>
   <img src={Quiz}className='banner' alt='quiz img'/>
  </div>
 )
}

export default Home
