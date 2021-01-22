import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header'
import { BASE_URL, KEY } from "./Constants/Constants";
import styled from "styled-components"

function App() {

  const [data,setData] = useState({})

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${KEY}`)
      
      .then(res => {
        setData(res.data)
        console.log(res);
      })
      .catch(err => {
      console.log(err);
      })
  }, [])
  return (
    <div className="App">
      
      
      <Header data={data}/>
      
      

    </div>
  );
}

export default App;


//<p>
//Read through the instructions in the README.md file to build your NASA
//app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//</p>