import './components/Navbar'
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Div, Text, Button, Icon } from 'atomize';
import Wave from 'react-wavify'
import axios from 'axios';
import Results from './components/Results';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
