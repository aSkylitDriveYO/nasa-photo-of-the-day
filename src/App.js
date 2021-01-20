import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header'

function App() {

  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  return (
    <div className="App">
      
      
      <Header date={data}/>
      
      

    </div>
  );
}

export default App;


//<p>
//Read through the instructions in the README.md file to build your NASA
//app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//</p>