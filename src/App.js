import axios from 'axios';
import './App.css';
import {baseURL, apiKey} from './axiosConfig.js';

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
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
