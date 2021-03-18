import React from 'react';
import styled from 'styled-components';
import LinkExternal from '../link-external';

export function Button({ children, text, href, icon, ...rest }) {
  return (
    <ButtonWrapper href={href} {...rest} className="button">
      <h5 className="sequel">
        {text || children}
        {icon && icon}
      </h5>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled(LinkExternal)`
  display: flex;
  color: #ffff00 !important;
  background: transparent;
  border: solid 1px white;
  border-radius: 10rem;
  transition: transform ${(props) => props.theme.animation.duration[300].css}
      ${(props) => props.theme.animation.timingFunction.css},
    opacity ${(props) => props.theme.animation.duration[100].css}
      ${(props) => props.theme.animation.timingFunction.css} !important;

  @media (hover: hover) {
    &:hover {
      color: black !important;
      background: #ffff00 !important;
      border: solid 1px black;

      svg,
      svg path {
        fill: black !important;
      }
    }

    &:hover,
    *:hover {
      text-decoration: none;
    }
  }

  & * {
    margin: 0;
    text-decoration: none;
  }

  svg {
    transform: translateX(0.75em);
  }
`;
