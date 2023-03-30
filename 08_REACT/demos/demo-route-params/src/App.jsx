import { Link, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const clickHandler = () => {
    console.log("Je m'apprête à naviguer vers /projects/125");

    navigate("/projects/125")
  }

  return (
    <div className="App">
      <main>
        <Link to={"/projects/125"}>Aller au projet</Link>
        <br />
        <button onClick={clickHandler}>Click Me!</button>
      </main>
    
    </div>
  );
}

export default App;
