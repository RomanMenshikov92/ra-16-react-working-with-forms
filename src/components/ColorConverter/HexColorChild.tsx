import React from "react";

interface HexColorChildProps {
  hexColor: string;
  handleHexColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HexColorChild: React.FC<HexColorChildProps> = ({ hexColor, handleHexColorChange }) => {
  return (
    <div className="background__hex">
      <label htmlFor="name" className="background__label"></label>
      <span className="background__span">HEX</span>
      <input id="name" name="input" className="background__input" type="text" value={hexColor} onChange={handleHexColorChange} />
    </div>
  );
};

export default HexColorChild;
