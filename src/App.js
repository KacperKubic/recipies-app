import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Homepage from './pages/Homepage';
import Recipie from './pages/Recipie';

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={quizEnded ? <Homepage/> : <Quiz/>}/>
          <Route path='/recipie/:id' element={<Recipie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
