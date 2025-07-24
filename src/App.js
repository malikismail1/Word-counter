import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils"  abouttext="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} mode={mode} />
      <div className="container my-3">
        <Routes>
          <Route
           path="/" element={
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove Text"mode={mode}/>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
