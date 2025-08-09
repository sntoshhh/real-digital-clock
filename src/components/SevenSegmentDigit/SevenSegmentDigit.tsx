import React, { useMemo } from "react";
import { dig, encode } from "../../utils/timeUtils";

import "../../styles.css";

interface SevenSegmentDigitProps {
  digit: number;
  prefix: string;
}

export const SevenSegmentDigit: React.FC<SevenSegmentDigitProps> = ({
  digit,
  prefix,
}) => {
  const segmentsToLight = useMemo(() => {
    return encode[digit] || [];
  }, [digit]);

  const isSegmentLit = (segmentNum: number) =>
    segmentsToLight.includes(segmentNum);

  return (
    <svg
      version="1.1"
      id={`Layer_1_${prefix}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="283px"
      height="500px"
      viewBox="108.5 0 283 500"
      enableBackground="new 108.5 0 283 500"
      xmlSpace="preserve"
    >
      <g>
        <polygon
          className={`${prefix}-${dig[5]} ${isSegmentLit(5) ? "segment-on" : "segment-off"}`}
          points="163.5,280.557 163.5,441.87 140.532,465.189 117.5,442.08 117.5,280.557 140.5,257.656"
        />
        <polygon
          className={`${prefix}-${dig[2]} ${isSegmentLit(2) ? "segment-on" : "segment-off"}`}
          points="163.5,59.557 163.5,220.87 140.532,244.189 117.5,221.08 117.5,59.557 140.5,36.656"
        />
        <polygon
          className={`${prefix}-${dig[6]} ${isSegmentLit(6) ? "segment-on" : "segment-off"}`}
          points="383.5,280.557 383.5,441.87 360.532,465.189 337.5,442.08 337.5,280.557 360.5,257.656"
        />
        <polygon
          className={`${prefix}-${dig[3]} ${isSegmentLit(3) ? "segment-on" : "segment-off"}`}
          points="383.5,59.557 383.5,220.87 360.532,244.189 337.5,221.08 337.5,59.557 360.5,36.656"
        />
        <polygon
          className={`${prefix}-${dig[7]} ${isSegmentLit(7) ? "segment-on" : "segment-off"}`}
          points="331.365,493.5 170.052,493.5 146.732,470.532 169.842,447.5 331.365,447.5 354.266,470.5"
        />
        <polygon
          className={`${prefix}-${dig[4]} ${isSegmentLit(4) ? "segment-on" : "segment-off"}`}
          points="331.365,274.5 170.052,274.5 146.732,251.532 169.842,228.5 331.365,228.5 354.266,251.5"
        />
        <polygon
          className={`${prefix}-${dig[1]} ${isSegmentLit(1) ? "segment-on" : "segment-off"}`}
          points="331.365,52.5 170.052,52.5 146.732,29.532 169.842,6.5 331.365,6.5 354.266,29.5"
        />
      </g>
    </svg>
  );
};
