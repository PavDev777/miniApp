import { useDispatch, useSelector } from "react-redux";
import { selectYear, yearSelected } from "../../features/costs/costsSlice";

import "./CostFilter.css";

export const CostsFilter = () => {
  const year = useSelector(yearSelected);
  const dispatch = useDispatch();

  const yearHandler = (e) => {
    dispatch(selectYear(e.target.value));
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={year} onChange={yearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
