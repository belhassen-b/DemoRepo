import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 p-3 bg-dark text-light rounded">
            <Counter />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
