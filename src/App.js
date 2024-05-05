import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const router= createBrowserRouter([
    {
        path: "/" ,
        element: <TextForm showAlert={showAlert}  heading="Enter the text to analyze"mode= {mode} />
    },
    {
        path: "/about",
        element: <About />
    }
  ])

  return (
    <>
        <Navbar title="TextUtils" mode= {mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
            <RouterProvider router={router} />  
        </div>
    </>
);
}

export default App;