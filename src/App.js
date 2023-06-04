// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // wheter dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}

      <Alert alert={alert} />


      <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> 
      
      {/* <div className="container my-3 " >

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div> */}
      {/* </Router> */}


     </>
  );
}

export default App;
