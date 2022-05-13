export interface AppState {
  isLoaded: boolean;
  menu: {
    isMenuOpen: boolean;
    isMenuClosing: boolean;
  };
  smoothScroll: globalThis.ScrollSmoother | undefined;
}
