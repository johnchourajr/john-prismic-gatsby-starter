import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Box from "./index.tsx";
import styled from "styled-components";

function ImageBox({ src, alt, ...rest }) {
  const image = getImage(src);
  return (
    <ImageBoxWrap {...rest}>
      <GatsbyImage image={image} alt={alt} />
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

export { ImageBox };
