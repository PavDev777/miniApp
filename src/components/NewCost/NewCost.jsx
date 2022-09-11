import { CostForm } from "../CostForm/CostForm";
import styled from "./NewCost.module.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import { useState } from "react";
import { ButtonAddedCosts } from "../ButtonAddedCosts/ButtonAddedCosts";

export const NewCost = () => {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <Wrapper>
      <div className={styled.newCosts}>
        {isAdded ? (
          <CostForm setIsAdded={() => setIsAdded(!isAdded)} />
        ) : (
          <ButtonAddedCosts onClick={() => setIsAdded(!isAdded)} />
        )}
      </div>
    </Wrapper>
  );
};
