import React from "react";
import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

import styled from "./App.module.scss";

export const App = () => {
  return (
    <div className={styled.container}>
      <NewCost />
      <Costs />
    </div>
  );
};
