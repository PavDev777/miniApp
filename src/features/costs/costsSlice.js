import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCosts: [
    {
      id: "c1",
      name: "testing",
      amount: 1200,
      date: new Date(2021, 2, 12),
    },
    {
      id: "c2",
      name: "testing2",
      amount: 1300,
      date: new Date(2022, 1, 12),
    },
  ],
  selectedYear: "2021",
  filteredCosts: [],
};

export const costsSlice = createSlice({
  name: "costs",
  initialState,

  reducers: {
    addCosts: (state, action) => {
      state.allCosts.push(action.payload);
    },
    selectYear: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { addCosts, selectYear, filteredYears } = costsSlice.actions;

export const selectAllCosts = (state) => state.costs.allCosts;
export const yearSelected = (state) => state.costs.selectedYear;

export default costsSlice.reducer;
