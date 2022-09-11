import styled from "./Wrapper.module.scss";

export const Wrapper = ({ children }) => (
  <div className={styled.wrapper}>{children}</div>
);
