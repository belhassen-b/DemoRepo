
import './App.css';
import { ComponentHeader } from './Components/Header';
import { ComponentFooter } from './Components/Footer';
import { FirstExercice } from './Components/FirstExercice';
import { SecondExercice } from './Components/SecondExercice';
import { ThirdExercice } from './Components/ThirdExercice';

function App() {
  return (
    <>
    <ComponentHeader></ComponentHeader>
    <main>
      <FirstExercice></FirstExercice>
      <SecondExercice></SecondExercice>
      <ThirdExercice></ThirdExercice>
    </main>
    <ComponentFooter></ComponentFooter>
    </>
  );
}

export default App;
