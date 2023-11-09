import React, { useRef } from "react";

interface FormPhotoManagerProps {
  setImagePreviews: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FormPhotoManager: React.FC<FormPhotoManagerProps> = ({ setImagePreviews }) => {
  const filePickerRef = useRef<HTMLInputElement>(null);

  const previewFiles = (files: FileList | null) => {
    if (files) {
      const promises: Promise<string>[] = Array.from(files).map(fileToDataUrl);
      Promise.all(promises).then((previews) => {
        setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
      });
    }
  };

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      fileReader.onerror = (e) => {
        reject(new Error(e.target?.error as unknown as string));
      };
      fileReader.readAsDataURL(file);
    });
  };

  return (
    <div className="photo-manager__form">
      <label className="photo-manager__label" htmlFor="formfile"></label>
      <input
        id="formfile"
        className="photo-manager__input"
        ref={filePickerRef}
        accept="image/*"
        onChange={(e) => previewFiles(e.target.files)}
        type="file"
        multiple
        hidden
      />
      <button className="photo-manager__btn" onClick={() => filePickerRef.current?.click()}>
        Click to select
      </button>
    </div>
  );
};

export default FormPhotoManager;
