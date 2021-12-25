//import React, {useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location
} from "./pages"
/* function SecretComponent() {
  return (
    <div>
      <h1>Secret Component</h1>
      <p>This is a secret component</p>
    </div>
  )
}

function RegularComponent() {
  return (
    <div>
      <h1>Everyone can see this Regular Component</h1>
      <p>This is a regular component</p>
    </div>
  )
} */

//https://api.github.com/users

function App( {login} ) {

  return(
    <div> 
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="about" element = {<About/>}>
          <Route path="services" element = {<Services/>}/>
          <Route path="company-history" element = {<CompanyHistory/>}/>
          <Route path="location" element = {<Location/>}/>
        </Route>
        <Route path="events" element= {<Events/>} />
        <Route path="contact" element= {<Contact/>} />
        <Route path="*" element= {<Whoops404/>} />

      </Routes>
    </div>
  )


 /*  const [data, setData] = useState(null);

  useEffect(() => {
    fetch( `https://api.github.com/users/ ${login}` )
    .then((response) => response.json())
    .then(setData);
  },[]);

  if(data){
    return<div>{JSON.stringify(data)}</div>
  }
  return <div>Loading...Not Available</div>
 */
  /* const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log("It's ${emotion} around here ");
  });
  return (
    <>
    <h1>Current emotion is {emotion}. </h1>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button/>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  );*/
};

export default App;
