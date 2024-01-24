import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);

  //For the time format
  const formatTime = (secs) => {
  const mins = Math.floor(secs / 60);
  const remainingSecs = secs % 60;
  return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`
  };

  const toggleTime = () =>{
    setisRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () =>{
    setisRunning(false);
    setelapsedTime(0);
  };

  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(()=>{
        setelapsedTime((prevElapsedTime) => prevElapsedTime + 1)
      },1000);
    }
    else{
      clearInterval(intervalId);
    }
    return()=> clearInterval(intervalId);
  },[isRunning]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={toggleTime}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
