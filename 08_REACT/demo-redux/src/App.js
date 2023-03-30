import './App.css';
import {useSelector} from "react-redux";

function App() {
  const todos = useSelector(state => state.todos)
    return (
        <div className="App">
          <div className="container">
            <div className="row my-3">
                <div className="col-10 offset-1 bg-dark rounded text">
                  <h3>Demo Redux</h3>
                  <hr/>
                  <ParentComponent/>
                  {todo.lenght > 0 ?
                      <p>Il n'y a pas de tâches</p>

                </div>
}
export default App;
