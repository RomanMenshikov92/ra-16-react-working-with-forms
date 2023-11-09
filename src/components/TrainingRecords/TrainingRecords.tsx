import React, { useState } from "react";
import "./trainingRecords.css";
import TrainingRecord from "./interfaces/InterfaceTrainingRecord";
import moment from "moment";
import TopDateChild from "./TopDateChild";
import TableDateChild from "./TableDateChild";

export const TrainingRecords: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [trainingData, setTrainingData] = useState<TrainingRecord[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleInputDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedDate = moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");

    if (editMode) {
      const updatedRecords = trainingData.map((record) => (record.id === editId ? { ...record, date: formattedDate, distance } : record));
      setTrainingData(updatedRecords.sort((a, b) => moment(b.date, "DD.MM.YYYY").diff(moment(a.date, "DD.MM.YYYY"))));
      setEditMode(false);
      setEditId("");
    } else {
      const existingRecord = trainingData.find((record) => record.date === formattedDate);
      if (existingRecord) {
        const updatedRecords = trainingData.map((record) =>
          record.id === existingRecord.id ? { ...record, distance: (parseFloat(record.distance) + parseFloat(distance)).toString() } : record
        );
        setTrainingData(updatedRecords.sort((a, b) => moment(b.date, "DD.MM.YYYY").diff(moment(a.date, "DD.MM.YYYY"))));
      } else {
        const newRecord: TrainingRecord = { id: Date.now().toString(), date: formattedDate, distance };
        setTrainingData([newRecord, ...trainingData].sort((a, b) => moment(b.date, "DD.MM.YYYY").diff(moment(a.date, "DD.MM.YYYY"))));
      }
    }
    setDate("");
    setDistance("");
  };

  const handleEdit = (id: string, date: string, distance: string) => {
    setEditMode(true);
    setEditId(id);
    setDate(moment(date, "DD.MM.YYYY").format("YYYY-MM-DD"));
    setDistance(distance);
  };

  const handleDelete = (id: string) => {
    const updatedRecords = trainingData.filter((record) => record.id !== id);
    setTrainingData(updatedRecords);
  };

  return (
    <div className="training-records__wrapper">
      <form className="training-records__form" onSubmit={handleSubmit}>
        <TopDateChild
          date={date}
          distance={distance}
          handleInputDateChange={handleInputDateChange}
          handleInputDistanceChange={handleInputDistanceChange}
          handleSubmit={handleSubmit}
          editMode={editMode}
        ></TopDateChild>
        <TableDateChild trainingData={trainingData} editMode={editMode} handleEdit={handleEdit} handleDelete={handleDelete}></TableDateChild>
      </form>
    </div>
  );
};

export default TrainingRecords;
