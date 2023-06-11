import Quiz from './pages/Quiz';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Homepage from './pages/Homepage';

const App = () => {
  const [quizEnded, setQuizEnded] = useState(false);
  const quizDone = Cookies.get('done');

  useEffect(() => {
    if(quizDone){
      setQuizEnded(true)
    }else{
      return;
    }
  }, [quizDone])

  return (
    <div className="app">
      {quizEnded ? <Homepage/> : <Quiz/>}
    </div>
  );
}

export default App;
