import React, {useState , useEffect} from "react";
import "./App.css";
import {BASE_URL , DEMO_KEY} from '.';

 import axios from 'axios';



function App() {
 const [nasaData, setNasaData] = useState([]);
 const [urlData , setUrlData] = useState();

 const nasaUrl = url => {
   setNasaData(url)
 }


useEffect(() =>{
  axios.get(`${BASE_URL}/?api_key=${DEMO_KEY}`)
  .then((res) => {
    setNasaData(res.data)
  })
  .catch((err) =>console.log(err));
}, [])

console.log('nasaData', nasaData);

  return (
  <div className="App">
  <h1>
   THis is working
   
  </h1>
  
</div>
);
}

export default App;
