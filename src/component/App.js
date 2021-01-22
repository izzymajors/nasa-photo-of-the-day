import {NasaImage} from './NasaImage';
import React, {useState , useEffect} from "react";
import {BASE_URL , DEMO_KEY} from '.';
 import axios from 'axios';
 import "./App.css";

 

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
  This is the start of your own App that captures nasa photo of the day
   
  </h1>
  <NasaImage/>
</div>
);
}

export default App;
