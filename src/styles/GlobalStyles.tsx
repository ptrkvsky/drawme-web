import React from "react";
import ResetStyles from "./ResetStyles";
import { Global, css, useTheme } from "@emotion/react";
import { breakpoints } from "./foundations/breakpoints";
import { ITheme } from "./StyleContainer";
import wagonBold from "../fonts/wagon/wagon-bold.woff2";
import PPNeueMontrealBold from "../fonts/montreal/PPNeueMontreal-Bold.woff2";
import PPNeueMontrealMedium from "../fonts/montreal/PPNeueMontreal-Medium.woff2";
import PPNeueMontrealThin from "../fonts/montreal/PPNeueMontreal-Thin.woff2";

const GlobalStyles = () => {
  const theme: ITheme = useTheme();
  return (
    <>
      <ResetStyles />
      <Global
        styles={css`
          @font-face {
            font-family: "WagonBold";
            src: url(${wagonBold}) format("woff2");
          }

          @font-face {
            font-family: "MontrealBold";
            src: url(${PPNeueMontrealBold}) format("woff2");
          }

          @font-face {
            font-family: "MontrealMedium";
            src: url(${PPNeueMontrealMedium}) format("woff2");
          }

          @font-face {
            font-family: "MontrealThin";
            src: url(${PPNeueMontrealThin}) format("woff2");
          }

          * {
            box-sizing: border-box;
            margin: 0;
          }

          :root {
            font-size: calc(100vw / 1920 * 10);
          }

          &::selection {
            background: ${theme.colors.iceIceBaby};
            transition: all 0.1s linear;
          }

          body {
            background: ${theme.colors.background};
            color: ${theme.colors.text};
            min-height: 100vh;
            font-family: ${theme.typography.fonts.body.medium};

            margin: 0;
            padding: 0;
            transition: all 0.5s linear;
            opacity: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${theme.typography.fonts.heading};
            font-weight: 600;
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          a:visited {
            color: inherit;
          }

          .bold,
          b,
          strong {
            font-weight: 600;
          }

          button {
            color: ${theme.colors.text};
          }

          main {
            min-height: calc(100vh - 176px - 320px);
          }

          .relative {
            position: relative;
          }

          .clear {
            &:after {
              content: "";
              display: table;
              clear: both;
            }
          }

          .container {
            width: 100%;
            max-width: 1150px;
            margin-left: auto;
            margin-right: auto;
            ${breakpoints.tabletLandscape} {
              padding: 0 2rem;
            }
          }

          .none {
            display: none;
          }

          .opacity-0 {
            opacity: 0;
          }

          .primary-color {
            color: ${theme.colors.iceIceBaby};
          }

          .split-text div {
            overflow: hidden;
          }

          .overflow-visible .split-text div {
            overflow: visible;
          }

          #___gatsby {
            min-height: 100vh;
          }

          #___gatsby .hide-tablet-landscape {
            display: inherit;
            ${breakpoints.tabletLandscape} {
              display: none;
            }
          }

          #___gatsby .show-tablet-landscape {
            display: none;
            ${breakpoints.tabletLandscape} {
              display: flex;
            }
          }

          #___gatsby .hide-tablet-portrait {
            display: inherit;
            ${breakpoints.tabletPortrait} {
              display: none;
            }
          }

          #___gatsby .show-tablet-portrait {
            display: none;
            ${breakpoints.tabletPortrait} {
              display: inherit;
            }
          }

          #___gatsby .hide-mobile {
            display: initial;
            ${breakpoints.mobile} {
              display: none;
            }
          }

          #___gatsby .show-mobile {
            display: none;
            ${breakpoints.mobile} {
              display: inherit;
            }
          }

          /* width */
          ::-webkit-scrollbar {
            width: 8px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #000000;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #292929;
            transition: all 0.3s linear;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
