import React from "react";

interface ListPhotoManagerProps {
  imagePreviews: string[];
  setImagePreviews: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ListPhotoManager: React.FC<ListPhotoManagerProps> = ({ imagePreviews, setImagePreviews }) => {
  const clearAllFiles = () => {
    setImagePreviews([]);
  };

  return (
    <>
      {imagePreviews.length > 0 && (
        <ul className="photo-manager__list">
          {imagePreviews.map((preview, index) => (
            <li key={index} className="photo-manager__item">
              <button
                className="photo-manager__btn-close"
                onClick={() => {
                  const newPreviews = [...imagePreviews];
                  newPreviews.splice(index, 1);
                  setImagePreviews(newPreviews);
                }}
              >
                ✘
              </button>
              <img className="photo-manager__img" src={preview} alt="Preview" />
            </li>
          ))}
        </ul>
      )}
      {imagePreviews.length > 0 && (
        <button className="photo-manager__clear-btn" onClick={clearAllFiles}>
          Clear All
        </button>
      )}
    </>
  );
};

export default ListPhotoManager;
