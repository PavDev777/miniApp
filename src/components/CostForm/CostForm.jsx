import { useId, useState } from "react";
import { ButtonAction } from "../ButtonAction/ButtonAction";
import { useDispatch } from "react-redux";
import { addCosts } from "../../features/costs/costsSlice";

import styled from "./CostForm.module.scss";

export const CostForm = ({ setIsAdded }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const id1 = useId();
  const id2 = useId();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const dataFromCost = {
      id: Math.random().toString(),
      name,
      amount,
      date: new Date(date),
    };

    if (!dataFromCost.name || !dataFromCost.amount || !date) {
      return;
    }

    dispatch(addCosts(dataFromCost));

    setName("");
    setAmount("");
    setDate("");
    setIsAdded();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styled.newCostsInputs}>
        <div className={styled.newCostsInput}>
          <label htmlFor={id1}>Название</label>
          <input
            id={id1}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styled.newCostsInput}>
          <label htmlFor={id2}>Сумма</label>
          <input
            id={id2}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className={styled.newCostsInput}>
          <label>Дата</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className={styled.newCostsActions}>
          <ButtonAction text={"Добавить расход"} submit />
          <ButtonAction text={"Отмена"} onClose={setIsAdded} />
        </div>
      </div>
    </form>
  );
};
