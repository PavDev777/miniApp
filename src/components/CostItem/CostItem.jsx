import styled from "./CostItem.module.scss";
import { CostDate } from "../CostDate/CostDate";

export const CostItem = ({ name, amount, date }) => {
  return (
    <div className={styled.costItem}>
      <CostDate date={date} />
      <div className={styled.costItemDescription}>
        <h2>{name}</h2>
        <div className={styled.costItemPrice}>${amount}</div>
      </div>
    </div>
  );
};
