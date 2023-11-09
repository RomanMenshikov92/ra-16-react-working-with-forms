import React from "react";

interface RgbColorChildProps {
  rgbColor: string;
}

export const RgbColorChild: React.FC<RgbColorChildProps> = ({ rgbColor }) => {
  return (
    <div className="background__rba">
      <span className="background__span">RGB</span>
      <span className="background__converter">{rgbColor}</span>
    </div>
  );
};

export default RgbColorChild;
