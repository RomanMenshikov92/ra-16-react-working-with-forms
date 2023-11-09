import "./App.css";
import { ColorConverter } from "./components/ColorConverter/";
import { TrainingRecords } from "./components/TrainingRecords";
import { PhotoManager } from "./components/PhotoManager/";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Конвертер цветов из HEX в RGB</h2>
        <ColorConverter></ColorConverter>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Учёт тренировок</h2>
        <TrainingRecords></TrainingRecords>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Менеджер фото</h2>
        <PhotoManager></PhotoManager>
      </div>
    </>
  );
}

export default App;
