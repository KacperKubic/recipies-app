import axios from 'axios';
import './App.css';
import {baseURL, apiKey} from './axiosConfig.js';
import Quiz from './pages/Quiz';

const App = () => {

  const test = () => {
    axios.get(`${baseURL}?apiKey=${apiKey}&diet=vegan&number=5`).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="app">
      <Quiz/>
    </div>
  );
}

export default App;
