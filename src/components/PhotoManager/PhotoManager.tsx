import React, { useState } from "react";
import "./photomanager.css";
import FormSelectChild from "./FormSelectChild";
import ListImageChild from "./ListImageChild";

export const PhotoManager: React.FC = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  return (
    <div className="photo-manager__wrapper">
      <FormSelectChild setImagePreviews={setImagePreviews}></FormSelectChild>
      <ListImageChild imagePreviews={imagePreviews} setImagePreviews={setImagePreviews}></ListImageChild>
    </div>
  );
};

export default PhotoManager;
