import logo from './logo.svg';
import './App.css';
import ThirdComponent, { FirstComponent, FiveComponent, FourComponent, SecondComponent, SevenComponent, SixComponent } from './component/Component';
import { Car } from './component/Car';



function App() {




  return (
    <>  {/* <React.Fragment> */}
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent message={"coucou"}></ThirdComponent>
      <FourComponent message={"Mon quatriéme component !!!"}></FourComponent>
      <FiveComponent message={"Mon cinquiéme component !!!"}></FiveComponent>
        
    </div> */}
    {/* <SixComponent>
        <>Et enfin mon sixieme component !!!</>
      </SixComponent>   
    </> */}
    {/* <h2>Coucou H2 depuis app js</h2>
      <SevenComponent></SevenComponent> */}
     <Car></Car>
    </>
  );
}

export default App;
