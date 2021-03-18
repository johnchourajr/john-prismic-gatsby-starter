import React from 'react';
import Img from 'gatsby-image';
import Box from '.';
import styled from 'styled-components';

export default function ImageBox({ fluid, ...rest }) {
  return (
    <ImageBoxWrap {...rest}>
      <Img fluid={fluid} />
    </ImageBoxWrap>
  );
}

const ImageBoxWrap = styled(Box)`
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
