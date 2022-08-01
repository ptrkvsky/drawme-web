// DUCKS pattern
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

interface CounterState {
  isCanvaBlack: boolean;
}

const initialState: CounterState = {
  isCanvaBlack: true, // Used to handle which background you want to .
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCanvaBlack(state) {
      state.isCanvaBlack = true;
    },
    removeBlack(state) {
      state.isCanvaBlack = false;
    },
    toggleBlack(state) {
      state.isCanvaBlack = !!state.isCanvaBlack;
    },
  },
});

export const homeSelector = (state: RootState) => state.home;

export const { setCanvaBlack, removeBlack, toggleBlack } = homeSlice.actions;
export default homeSlice.reducer;
