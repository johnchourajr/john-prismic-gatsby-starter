import React, { FC } from "react";
import { GatsbyImage, GatsbyImageProps, getImage, ImageDataLike } from "gatsby-plugin-image";
import Box from "./index";
import styled from "styled-components";

const ImageBox: FC<GatsbyImageProps> = ({ image, alt, ...rest }) => {
  const img = getImage(image);
  return (
    <ImageBoxWrap {...rest}>
      <GatsbyImage image={img} alt={alt} />
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

export default ImageBox;
