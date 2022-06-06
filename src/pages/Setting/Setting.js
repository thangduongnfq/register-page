import React, { useEffect, useRef, useState } from "react";

export default function () {
  const [number, setNumber] = useState(0);
  const [isStop, setIsStop] = useState(false);
  useEffect(() => {
    let start = Date.now();
    let timer;
    if (!isStop)
      timer = setInterval(() => {
        setNumber((Date.now() - start) / 1000);
      }, 10);
    return () => clearInterval(timer);
  }, [isStop]);
  return (
    <div className="page-container">
      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            setNumber(0);
            setIsStop(false);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsStop(true);
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
