import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as icon from "./export";

const Container = styled.span`
  display: inline-flex;

  svg path {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;

function SvgLoader({ svg, color, ...rest }) {
  const Icon = icon[svg] || icon["Icon"];

  return (
    <Container className="icon-wrap" color={color} {...rest}>
      {svg && <Icon />}
    </Container>
  );
}

SvgLoader.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  svg: PropTypes.oneOf(Object.keys(icon)),
};

export default SvgLoader;
