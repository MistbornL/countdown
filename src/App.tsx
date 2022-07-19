import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  var [seconds, setSeconds] = useState<any>(0);
  var [stop, setStop] = useState<boolean>(false);
  console.log(stop);
  const interval = (myInterval: any) => {
    if (seconds > 0 && !stop) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      clearInterval(myInterval);
    }
    if (stop) {
      console.log("stoped");
      clearInterval(myInterval);
    }
  };
  useEffect(() => {
    let myInterval = setInterval(interval, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="App">
      <div className="colntainer">
        <h1>Simple CountDown</h1>
        <input
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
          type="text"
        />
        {!stop ? (
          <button
            onClick={() => {
              setStop(true);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => {
              setStop(false);
            }}
          >
            resume
          </button>
        )}
        <h1>
          countdown <span>{seconds > 0 ? seconds : null}</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
