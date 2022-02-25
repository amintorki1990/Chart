import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    selectChart: (state, action) => {
      state.types.push(action.payload)
    },
  },
});

export const { selectChart } = chartSlice.actions;
export default chartSlice.reducer;
