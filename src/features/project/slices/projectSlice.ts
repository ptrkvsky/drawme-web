import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { ProjectState } from "../types/index";

const initialState: ProjectState = {
  color: ``,
};

const projectSlice = createSlice({
  name: `project`,
  initialState,
  reducers: {
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

// Selectors
export const projectSelector = (state: RootState) => state.project;

export const { setColor } = projectSlice.actions;
export default projectSlice.reducer;
