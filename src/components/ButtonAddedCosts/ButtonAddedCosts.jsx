import styled from "./ButtonAddedCosts.module.scss";

export const ButtonAddedCosts = (props) => {
  return (
    <button onClick={props.onClick} className={styled.buttonAddedCosts}>
      {" "}
      Добавить расход{" "}
    </button>
  );
};
