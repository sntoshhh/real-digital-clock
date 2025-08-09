import React, { useState, useEffect } from "react";
import { SevenSegmentDigit } from "../SevenSegmentDigit/SevenSegmentDigit";

import "../../styles.css";

export interface DigitalClockProps {
  jsTime?: Date;
}

export const DigitalClockDisplay: React.FC<DigitalClockProps> = ({
  jsTime,
}) => {
  const [internalTime, setInternalTime] = useState(new Date());

  const isLiveClock = jsTime === undefined;
  const displayTime = isLiveClock ? internalTime : jsTime;

  useEffect(() => {
    let timerId: any;
    if (isLiveClock) {
      timerId = setInterval(() => {
        setInternalTime(new Date());
      }, 500);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isLiveClock]);

  const hours = displayTime.getHours();
  const minutes = displayTime.getMinutes();

  const h1 = Math.floor(hours / 10);
  const h2 = hours % 10;
  const m1 = Math.floor(minutes / 10);
  const m2 = minutes % 10;

  const colonClass = `seven-segment-colon ${isLiveClock ? "colon-blink" : ""}`;

  return (
    <div className="seven-segment-clock-container">
      <div className="seven-segment-main-time">
        <SevenSegmentDigit digit={h1} prefix="hhone" />
        <SevenSegmentDigit digit={h2} prefix="hhtwo" />

        <div
          className="seven-segment-colon colon-blink"
          role="presentation"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 40 100"
            width="auto"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle className="dot dot-on" cx="20" cy="32" r="7"></circle>
            <circle className="dot dot-on" cx="20" cy="68" r="7"></circle>
          </svg>
        </div>

        <SevenSegmentDigit digit={m1} prefix="mmone" />
        <SevenSegmentDigit digit={m2} prefix="mmtwo" />
      </div>
    </div>
  );
};
