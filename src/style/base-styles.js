import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html {
    background-color: ${(props) => props.theme.colors.white};
    font-size: 16px;
  }

  body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.black};
  }

  * {
      box-sizing: border-box;
      transition-timing-function: ${(props) =>
        props.theme.animation.timingFunction.css};
  }

  main#main {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      opacity: 0;
      background: black;
      transition: opacity ${(props) => props.theme.animation.duration[200].css}
      ${(props) => props.theme.animation.timingFunction.css};
    }

    &.no-underline, &.button {
      &:after {
        opacity: 0;
      }
    }

    @media (hover: hover) {
      &:hover {
        text-decoration: none;

        &:after {
          opacity: 1;
        }

        p {
          text-decoration: none;
        }

        * {
          text-decoration: none !important;
        }
      }
    }
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
    font-weight: 100;
    line-height: 108%;
    letter-spacing: 0.01em;
    margin-left: -0.02em;
  }

  h1,
  .h1 {
    font-size: ${(props) => props.theme.fonts.h1};
  }

  h2,
  .h2 {
    font-size: ${(props) => props.theme.fonts.h2};
  }

  h3,
  .h3 {
    font-size: ${(props) => props.theme.fonts.h3};
  }

  h4,
  .h4 {
    font-size: ${(props) => props.theme.fonts.h4};
  }

  h5,
  .h5 {
    font-weight: 400;
    font-style: normal;
    font-size: ${(props) => props.theme.fonts.h5};
    line-height: 120%;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    font-feature-settings: 'ss02' on, 'ss05' on, 'cpsp' on, 'calt' off,
      'liga' off;
  }

  h6,
  .h6 {
    font-weight: 400;
    font-style: normal;
    font-size: ${(props) => props.theme.fonts.h5};
    line-height: 120%;
    letter-spacing: 0.105em;
    text-transform: uppercase;
    font-feature-settings: 'ss02' on, 'ss05' on, 'cpsp' on, 'calt' off,
      'liga' off;
  }

  p,
  .p {
    font-family: interstate, sans-serif;
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

  .ReactModal__Overlay {
    opacity: 0;
    will-change: opacity;
    transition: opacity ${(props) => props.theme.animation.duration[100].css}
        ${(props) => props.theme.animation.timingFunction.css};

  }

  .ReactModal__Content {
    transition: transform ${(props) => props.theme.animation.duration[100].css}
        ${(props) => props.theme.animation.timingFunction.css};
    transform: translateY(50%);
    will-change: transform;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;

    .ReactModal__Content {
      transform: none;
    }
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;

    .ReactModal__Content {
      transform: translateY(50%);
    }
  }
`;

export default BaseStyles;
