import styled from "./BarDiagram.module.scss";

export const BarDiagram = ({ value, maxValue, label }) => {
  let fillBarHeight = "0%";

  if (maxValue > 0) {
    fillBarHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={styled.diagramBar}>
      <div className={styled.diagramBar__inner}>
        <div
          className={styled.diagramBar__fill}
          style={{ height: fillBarHeight }}
        ></div>
      </div>
      <div className={styled.diagramBar__label}>{label}</div>
    </div>
  );
};
