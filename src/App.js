// import {useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {
  // const [currentTime, setCurrentTime] = useState(0)

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time)
  //   })
  // }, [])
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <header className="App-header">
        <p>current time is {currentTime}.</p>
      </header> */}
    </div>
  );
}

export default App;
