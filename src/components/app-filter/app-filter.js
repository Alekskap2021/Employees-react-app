import "./app-filter.css";

const AppFilter = ({ filter, onFilterSelect }) => {
  const btnsData = [
    { name: "all", label: "Все сотрудники", id: 1 },
    { name: "onPromotion", label: "На повышение", id: 2 },
    { name: "moreThen1000", label: "З/П больше 1000$", id: 3 },
    { name: "onIncrease", label: "Премированные", id: 4 },
  ];
  const btns = btnsData.map(({ name, label, id }) => {
    const active = name === filter,
      clazz = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button className={clazz} type="button" onClick={() => onFilterSelect(name)} key={id}>
        {label}
      </button>
    );
  });
  return <div className="btn-group col-lg-8 col-md-10 col-12 d-flex">{btns}</div>;
};

export default AppFilter;
