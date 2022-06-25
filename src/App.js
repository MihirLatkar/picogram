// import {useState,useEffect} from 'react'
import React from 'react'

import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const [currentTime, setCurrentTime] = useState(0)

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time)
  //   })
  // }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          
        </Routes>
        {/* <header className="App-header">
          <p>current time is {currentTime}.</p>
        </header> */}
      </div>
    </Router>
  );
}

export default App;
