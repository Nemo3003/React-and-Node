import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";


function AppTwo(){
  return <h1>The second app</h1>;
  
}
//this will give me the first item in the array
const [mostImportantItem] = ["boots","tent",["food","beer",["water"]], "headlamp"]
console.log(mostImportantItem);


ReactDOM.render(

  < App authorized= {true} login="Nemo3003" />,

  document.getElementById('root')
);


