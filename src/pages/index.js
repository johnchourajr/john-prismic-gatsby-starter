import React from "react";
import { graphql } from "gatsby";

import { Wrapper } from "../components/globals/wrappers";
import PageHeader from "../components/globals/header";
import styled, { createGlobalStyle } from "styled-components";
import Box from "../components/motion/motion-box";
import RichText from "../components/helpers/rich-text";

/**
 * page-template Component
 *
 * @param {Object} props
 * @param {Object} props.data
 */
export function HomeTemplate({
  data: {
    prismicHomepage: { data },
  },
}) {
  return (
    <>
      <Background />
      <PageHeader title={data.headline ? data.headline : data.title} />
      <Grid>
        <Box>
          <RichText render={data.body.raw} />
        </Box>
      </Grid>
    </>
  );
}

const Background = createGlobalStyle`
  @keyframes animation {
    0% {
      background-color: #FDFF90;
    }
    20% {
      background-color: #B9FF82;
    }
    40% {
      background-color: #626AFE;
    }
    60% {
      background-color: #D646BD;
    }
    80% {
      background-color: #FF5A5A;
    }
    100% {
      background-color: #FDFF90;
    }
  }

  body {
    animation: animation 10s linear infinite running;
  }
`;

const Grid = styled(Wrapper)`
  max-width: 100%;

  @media ${(props) => props.theme.device.laptop} {
    max-width: 50%;
  }
`;

/**
 * pageQuery
 */
export const pageQuery = graphql`
  query HomePageTemplate {
    prismicHomepage {
      uid
      url
      data {
        title
        headline
        body {
          raw
          text
          html
        }
      }
    }
  }
`;

export default HomeTemplate;
