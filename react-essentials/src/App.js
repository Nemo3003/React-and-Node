import './App.css';

function Header(props){
  console.log(props);
  return(
    <h1>{props.name}'s Kitchen</h1>
  );
}
function Main(props){
  return<section>
    <p>We serve the most {props.adjective} food around.</p>
  </section>
}
function Footer(props){
  return(
    <footer>
      <p>Copyright &copy; Eve's Kitchen, {props.year} </p>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header name ="Ulises"/>
      <Main adjective ="amazing"/>
      <Footer year= {new Date().getFullYear()} />
    </div>
  );
}

export default App;