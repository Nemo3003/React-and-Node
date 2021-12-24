import React from 'react';

import './App.css';

import restaurant from "./restaurant.jpg";

function Header(props){
  console.log(props);
  return(
    <h1>{props.name}'s Kitchen</h1>
  );
}
function Main(props){
  return<section>
    <p>We serve the most {props.adjective} food around.</p>
    <img 
    src={restaurant} 
    height= {200}
     alt="restaurant" 
      />
    <ul style = {{textAlign: "left"}} >
      {props.dishes.map((dish)=> 
      <li key = {dish.id} > {dish.title} </li>)}
    </ul>
    
  </section>
}
function Footer(props){
  return(
    <footer>
      <p>Copyright &copy; Eve's Kitchen, {props.year} </p>
    </footer>
  );
}

const dishes = [
  "Mac and Cheese",
  "Pizza",
  "Hamburger"
];


const dishObjects = dishes.map((dish, i) => ( {id:i, title:dish} ));

dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name ="Ulises"/>
      <Main adjective ="amazing" dishes = {dishObjects} />
      <Footer year= {new Date().getFullYear()} />
    </div>
  );
}

export default App;
