import styled from "./Diagram.module.scss";
import { BarDiagram } from "./BarDiagram";

export const Diagram = ({ datas }) => {
  const datasValues = datas.map((obj) => obj.value);
  const costsMaxMonth = Math.max(...datasValues);

  return (
    <div className={styled.diagram}>
      {datas.map((data) => (
        <BarDiagram
          key={data.label}
          value={data.value}
          maxValue={costsMaxMonth}
          label={data.label}
        />
      ))}
    </div>
  );
};
