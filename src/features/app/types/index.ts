export interface AppState {
  isLoaded: boolean;
  isPreloadOver: boolean;
  menu: {
    isMenuOpen: boolean;
    isMenuClosing: boolean;
  };
  header: {
    isBlack: boolean;
  };
  smoothScroll: globalThis.ScrollSmoother | undefined;
}
