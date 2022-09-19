import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Question1 from './components/question/Question1';
import SecondPage from './components/SecondPage';
import Question2 from './components/question/Question2';
import Question3 from './components/question/Question3';
import Question4 from './components/question/Question4';
import Question5 from './components/question/Question5';
import Question6 from './components/question/Question6';
import Question7 from './components/question/Question7';
import Question8 from './components/question/Question8';
import Question9 from './components/question/Question9';
import Question10 from './components/question/Question10';
import EndPage from './components/EndPage';

function App() {
  const [page, setPage] = useState(-1)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const obj = [
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',
    'Next',    
  ];
  const handleNext = () => {
    if (page !== 11){
      
      setPage((page) => page + 1)
    } else {
      setScore(0)
      setPage(0)
    }
  }
  const handleScore = () => {
    setScore((score) => score + 1)
  }



  switch (page) {
    case -1:
      return ( 
        <FirstPage handleNext={handleNext} />
        
       );
    case 0:
      return ( 
        <SecondPage setName={setName} setEmail={setEmail} handleNext={handleNext} />
        
       );
    case 1:
      return ( 
        <Question1 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext} />
       );
    case 2:
      return (
        <Question2 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext} />
      );
    case 3:
      return (
        <Question3 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
      )
    case 4:
        return (
          <Question4 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 5:
        return (
          <Question5 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 6:
        return (
          <Question6 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 7:
        return (
          <Question7 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 8: 
        return (
          <Question8 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 9:
        return (
          <Question9 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 10:
        return (
          <Question10 name={name} email={email} handleScore={handleScore} page={page} obj={obj} handleNext={handleNext}/>
        )
    case 11:
        return (
          <EndPage name={name} score={score} page={page} email={email} handleNext={handleNext}/>
        )
    default:
      break;
  }
  
}

export default App;
