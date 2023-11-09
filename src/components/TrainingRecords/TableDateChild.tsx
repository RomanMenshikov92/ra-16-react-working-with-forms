import React from "react";
import TrainingRecord from "./interfaces/InterfaceTrainingRecord";

interface TableDateChildProps {
  trainingData: TrainingRecord[];
  editMode: boolean;
  handleEdit: (id: string, date: string, distance: string) => void;
  handleDelete: (id: string) => void;
}

const TableDateChild: React.FC<TableDateChildProps> = ({ trainingData, editMode, handleEdit, handleDelete }) => {
  return (
    <table className="training-record__table">
      <thead>
        <tr className="training-record__header">
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {trainingData.map((record, index) => (
          <tr key={record.id} className="training-record__post">
            <td className="training-record__post-date">{record.date}</td>
            <td className="training-record__post-traveled-km">{record.distance}</td>
            <td className="training-record__post-nav">
              <button
                className="training-record__post-btn-edit"
                disabled={editMode}
                onClick={() => handleEdit(record.id, record.date, record.distance)}
              >
                ✎
              </button>
              <button className="training-record__post-btn-delete" onClick={() => handleDelete(record.id)} disabled={editMode}>
                ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDateChild;
