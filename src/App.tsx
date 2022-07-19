import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  var [seconds, setSeconds] = useState<any>(0);
  var [stop, setStop] = useState<boolean>(false);
  console.log(stop);

  useEffect(() => {
    let myInterval: any = setInterval(() => {
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
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <input
        onChange={(e) => {
          setSeconds(e.target.value);
        }}
        type="text"
      />
      <h1>countdown {seconds}</h1>
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
    </>
  );
}

export default App;
