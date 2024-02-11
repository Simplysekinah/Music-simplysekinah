// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Play from './Components/Play';
// import New from './Components/New';
import Playy from './Components/Playy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/play/:id' element={<Play/>} />
        <Route path='/new' element={<Playy/>} />

      </Routes>
    </div>
  );
}

export default App;
