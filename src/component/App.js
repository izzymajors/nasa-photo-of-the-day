import React, {useState , useEffect} from "react";
import "./App.css";
import {BASE_URL, DEMO_KEY} from '../Constants/constant';
 //import Details from './Details';
 import axios from 'axios';



function App() {
const [nasaData, setNasaData] = useState([]);

useEffect(() =>{
  axios.get(`${BASE_URL}?api_key=${DEMO_KEY}`)
  .then((res) => {
    setNasaData(res.data)
  })
  .catch((err) =>console.log(err));
}, [])

console.log('nasaData', nasaData);

  return (
  <div className="App">
  <p>
    Read through the instructions in the README.md file to build your NASA
    app! Have fun <span role="img" aria-label='go!'>🚀</span>!
  </p>
</div>
);
}

export default App;
