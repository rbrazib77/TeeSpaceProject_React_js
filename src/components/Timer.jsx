import React from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useStopwatch({ autoStart: true });

  return (
    <div>
      <div className="text-[40px] font-PlusJaka font-semibold leading[56px]">
        <span>0{days}</span>:<span>0{hours}</span>:<span>0{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
