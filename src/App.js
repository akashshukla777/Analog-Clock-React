import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let arrlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const IntId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(IntId);
  }, []);

  return (
    <div className="main-container">
      <div className="clock-box">
        {arrlist.map((item) => {
          return (
            <div
              key={item}
              style={{ transform: `translate(-50%) rotate(${item * 30}deg)` }}
              className={`hours hr${item}`}
            >
              <p style={{transform:`rotate(${item *-30}deg)`}}>{item}</p>
            </div>
          );
        })}
        <div
          className="hand hrh"
          style={{
            transform: `translate(-50%) rotate(${
              currentTime.getHours() >= 12
                ? (currentTime.getHours() - 12) * 30
                : currentTime.getHours() * 30
            }deg)`,
          }}
        ></div>
        <div
          className="hand minh"
          style={{
            transform: `translate(-50%) rotate(${
              currentTime.getMinutes() * 6
            }deg)`,
          }}
        ></div>
        <div
          className="hand sech"
          style={{
            transform: ` translate(-50%) rotate(${
              currentTime.getSeconds() * 6
            }deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
