import React, { useEffect, useState } from "react";
import "./Digital.scss"

const Digital = () => {
    const [clockState, setClockState] = useState();
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      }, 1000);
    }, []);


    return (
      <div className="Digital">
        <h2>{clockState}</h2>
      </div>
    );
  };

export default Digital