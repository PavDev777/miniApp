import { CostsFilter } from "../CostFilter/CostFilter";
import { Wrapper } from "../Wrapper/Wrapper";

import styled from "./Costs.module.scss";
import { useSelector } from "react-redux";
import { selectAllCosts, yearSelected } from "../../features/costs/costsSlice";
import { CostItem } from "../CostItem/CostItem";
import { CostsDiagram } from "./CostsDiagram";

export const Costs = () => {
  const allCosts = useSelector(selectAllCosts);
  const selectedYear = useSelector(yearSelected);

  const filteredCosts = allCosts.filter((obj) => {
    return obj.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Wrapper>
      <CostsFilter />
      <CostsDiagram costs={filteredCosts} />
      <div className={styled.costs}>
        {!filteredCosts.length && (
          <h2 className={styled.costsEmpty}>Расходы отсутствуют</h2>
        )}

        {filteredCosts?.map((obj) => (
          <CostItem key={obj.id} {...obj} />
        ))}
      </div>
    </Wrapper>
  );
};
