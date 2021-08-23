import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  html {
    background-color: ${(props) => props.theme.colors.white};
    font-size: 16px;
  }

  body {
    font-family: 'GTHaptikRegular', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    fill: ${({ theme }) => theme.colors.black};
  }

  * {
      box-sizing: border-box;
      transition-timing-function: ${(props) =>
        props.theme.animation.timingFunction.css};
  }

  main#main {
    min-height: 100vh;
  }

  *:focus-visible {
    outline: none;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: -3px;
      left: -3px;
      bottom: 0;
      right: 0;
      border: solid 3px black;
      border-radius: 4px;
    }
  }

  pre, code {
    font-weight: 400;
    margin: 1rem 0;
  }

  hr {
    border: solid 1.5px ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.white};
    margin: 3rem 0;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6,
  p,
  .p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4 {
    margin-left: -0.02em;
    font-feature-settings: 'ss04' on, 'ss03' on, 'ss02' on, 'ss01' on, 'salt' on;
  }

  h1,
  .h1 {
    font-size: ${(props) => props.theme.fonts.h1};
    line-height: 110%;
  }

  h2,
  .h2 {
    font-size: ${(props) => props.theme.fonts.h2};
    line-height: 110%;
  }

  h3,
  .h3 {
    font-size: ${(props) => props.theme.fonts.h3};
    line-height: 110%;
  }

  h4,
  .h4 {
    font-size: ${(props) => props.theme.fonts.h4};
    line-height: 115%;
  }

  h5,
  .h5 {
    font-size: ${(props) => props.theme.fonts.h5};
    line-height: 130%;
    font-feature-settings: 'ss02' on, 'ss05' on, 'cpsp' on, 'calt' off,
      'liga' off;
  }

  h6,
  .h6 {
    font-size: ${(props) => props.theme.fonts.h6};
    line-height: 130%;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    font-feature-settings: 'ss02' on, 'ss05' on, 'cpsp' on, 'calt' off,
      'liga' off;
  }

  p,
  .p {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 200%;
    font-feature-settings: 'ss05' on, 'ss03' on, 'ss07' on, 'calt' off,
      'liga' off;

    &.strong {
      font-weight: 500;
    }
  }

  p.lead,
  .p-lead {
    font-size: 24px;
    line-height: 200%;
    font-feature-settings: 'ss05' on, 'ss03' on, 'ss07' on, 'calt' off,
      'liga' off;
  }

  p.caption,
  .p-caption {
    font-size: 11px;
    line-height: 170%;
    letter-spacing: 0.01em;
    font-feature-settings: 'ss05' on, 'ss03' on, 'ss07' on, 'calt' off,
      'liga' off;
  }

  a {
    color: ${(props) => props.theme.colors.black};
    transition: opacity ${(props) => props.theme.animation.duration[100].css}
      ${(props) => props.theme.animation.timingFunction.css};
    opacity: 1;

    @media (hover: hover) {
      &:hover {
        opacity: .9;
      }
    }
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
  }
`;

export default BaseStyles;
