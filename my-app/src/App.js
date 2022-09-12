import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import {Div} from 'atomize';

function App() {
  return (
    <Div bg="#12ADC1" h="100vh">
      <Navbar/>
    </Div>
  );
}

export default App;
