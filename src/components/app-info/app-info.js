import "./app-info.css";

const AppInfo = ({ amount, withIncrease }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {amount}</h2>
      <h2>Премию получат: {withIncrease}</h2>
    </div>
  );
};

export default AppInfo;
