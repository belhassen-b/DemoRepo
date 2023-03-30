import './App.css';
import MainComponent from "./Components/MainComponent";

function App() {
  const  maConstante =  1 ;
  const  maConstante2 =  "hello"  ;
  const  maConstanteJsx =  <div>Hello World</div> ;
  return (
    <div className="App">
  <MainComponent maValeur="24"/>
    </div>
  );
}

export default App;
