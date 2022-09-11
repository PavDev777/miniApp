import styled from "./ButtonAction.module.scss";

export const ButtonAction = ({ submit, text, onClose }) => {
  const bool = submit ? "submit" : "button";

  return (
    <button onClick={onClose} className={styled.buttonAction} type={bool}>
      {text}
    </button>
  );
};
