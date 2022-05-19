export interface AppState {
  isLoaded: boolean;
  menu: {
    isMenuOpen: boolean;
    isMenuClosing: boolean;
  };
  header: {
    isBlack: boolean;
  };
  smoothScroll: globalThis.ScrollSmoother | undefined;
}
