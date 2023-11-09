import React from "react";

interface TopDateChildProps {
  date: string;
  distance: string;
  handleInputDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputDistanceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  editMode: boolean;
}

export const TopDateChild: React.FC<TopDateChildProps> = ({
  date,
  distance,
  handleInputDateChange,
  handleInputDistanceChange,
  handleSubmit,
  editMode,
}) => {
  return (
    <div className="training-records__top">
      <div className="training-records__form-data">
        <label className="training-records__form-data-label" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input className="training-records__form-data-input" id="date" type="date" name="date" onChange={handleInputDateChange} value={date} />
      </div>
      <div className="training-records__form-traveled-KM">
        <label className="training-records__form-traveled-KM-label" htmlFor="traveled-KM">
          Пройдено км
        </label>
        <input
          className="training-records__form-traveled-KM-input"
          id="traveled-KM"
          type="number"
          name="traveled-KM"
          onChange={handleInputDistanceChange}
          value={distance}
        />
      </div>
      <button className="training-record__form-btn" type="submit">
        {editMode ? "Сохранить" : "OK"}
      </button>
    </div>
  );
};

export default TopDateChild;
