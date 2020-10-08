import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Picture from './Picture'
import Body from './Body'
import styled, { keyframes }from 'styled-components'


const StyledBody = styled.div`
  display:flex;
  max-width:70%;
  justify-content:center;
  margin: 10%;
  padding-left: 5%
  


`


function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iekItUQiiIUeVUrHMPoJLNA7rbcpxU95swna67aL')
       .then(res => {
         setNasaData(res.data)
    }).catch(err => { 
      debugger
    })
      }, [])
console.log(nasaData)







  return (
    <div className="App">
      <StyledBody>
      <Picture data={nasaData}/>
      <Body data={nasaData}/>
      </StyledBody>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
