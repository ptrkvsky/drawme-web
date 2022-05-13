import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppDispatch, store } from "../../../redux/store";
import { AppState } from "../types/index";

const initialState: AppState = {
  isLoaded: false,
  menu: {
    isMenuOpen: false,
    isMenuClosing: false,
  },
  smoothScroll: undefined,
};

const appSlice = createSlice({
  name: `app`,
  initialState,
  reducers: {
    setIsLoaded(state) {
      state.isLoaded = true;
    },
    setMenuStatus(state, action) {
      state.menu.isMenuOpen = action.payload;
    },
    setMenuStateFalse(state) {
      state.menu.isMenuOpen = false;
    },
    setMenuStateTrue(state) {
      state.menu.isMenuOpen = true;
    },
    setMenuClosingStateTrue(state) {
      state.menu.isMenuClosing = true;
    },
    setMenuClosingStateFalse(state) {
      state.menu.isMenuClosing = false;
    },
    setSmoothScroll(state, { payload: smoothScroll }) {
      state.smoothScroll = smoothScroll;
    },
  },
});

// Selectors
export const appSelector = (state: RootState) => state.app;
export const menuSelector = (state: RootState) => state.app.menu;

export const {
  setIsLoaded,
  setMenuStateFalse,
  setMenuStateTrue,
  setMenuStatus,
  setSmoothScroll,
  setMenuClosingStateTrue,
  setMenuClosingStateFalse,
} = appSlice.actions;
export default appSlice.reducer;

// // Thunks
// export const toggleMenuStatus = () => (dispatch: AppDispatch) => {
//   const { isMenuOpen } = store.getState().app.menu;
//   dispatch(setMenuStatus(isMenuOpen));
// };
