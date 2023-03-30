import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import { fetchAddresses } from './routes/addresses/addressesSlice';
import { fetchPeople } from './routes/people/peopleSlice';

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAddresses())
    dispatch(fetchPeople())
  }, [dispatch])
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 rounded bg-dark p-3 text-light">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
