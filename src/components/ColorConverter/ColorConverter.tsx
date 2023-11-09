import React, { useState } from "react";
import "./colorconverter.css";
import HexColorChild from "./HexColorChild";
import RgbColorChild from "./RgbColorChild";

interface Color {
  r: number;
  g: number;
  b: number;
}

export const ColorConverter: React.FC = () => {
  const [hexColor, setHexColor] = useState("#FFFFFF");
  const [rgbColor, setRgbColor] = useState("rgb(255,255,255)");

  const handleHexColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputHex = e.target.value;
    if (inputHex.match(/^#[0-9A-Fa-f]{6}$/)) {
      setHexColor(inputHex);
      const rgb = hexToRgb(inputHex);
      setRgbColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`);
    } else {
      setHexColor(inputHex);
      setRgbColor("Ошибка!");
    }
  };

  const hexToRgb = (hex: string): Color => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
  };

  let backgroundColor = {};
  let backgroundColorF = {};
  if (rgbColor === "Ошибка!") {
    backgroundColor = { background: "repeating-radial-gradient(circle, white 0% 3%, red 3% 6%)" };
    backgroundColorF = { background: "radial-gradient(red, white)" };
  } else {
    backgroundColor = { backgroundColor: rgbColor };
  }

  return (
    <div style={backgroundColor} className="background__wrapper">
      <form style={backgroundColorF} className="background__form" autoComplete="off">
        <HexColorChild hexColor={hexColor} handleHexColorChange={handleHexColorChange}></HexColorChild>
        <RgbColorChild rgbColor={rgbColor}></RgbColorChild>
      </form>
    </div>
  );
};

export default ColorConverter;
