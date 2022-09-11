import styled from "./CostDate.module.scss";

export const CostDate = ({ date }) => (
  <div className={styled.costItemDate}>
    <h2>{date.getDate()}</h2>
    <div>
      {date.toLocaleString("ru-RU", {
        month: "long",
      })}
    </div>
    <h4>{date.getFullYear()}</h4>
  </div>
);
