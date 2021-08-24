import React from "react";
import { graphql } from "gatsby";

import { Wrapper } from "../components/globals/wrappers";
import PageHeader from "../components/globals/header";
import styled from "styled-components";
import Box from "../components/motion/motion-box";
import RichText from "../components/helpers/rich-text";

/**
 * page-template Component
 *
 * @param {Object} props
 * @param {Object} props.data
 */
export default function Template({
  data: {
    prismicPage: { data },
  },
}) {
  return (
    <>
      <PageHeader title={data.headline ? data.headline : data.title} />
      <RichWrap>
        <Box>
          <RichText render={data.body.raw} />
        </Box>
      </RichWrap>
    </>
  );
}

const RichWrap = styled(Wrapper)`
  max-width: 100%;

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 50%;
  }

  ol {
    list-style: numbered;
    padding-left: 1rem;

    li {
      margin-bottom: 0.5em;
    }
  }

  strong {
    font-family: monospace;
    padding: 0.2rem 0.3rem;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.gray5};

    em {
      opacity: 0.5;
    }
  }

  h6 {
    strong {
      padding: 0;
      background: transparent;
    }
  }

  pre {
    font-family: monospace;
    border: 2px solid ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gray5};
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: 1.5;
    white-space: pre-wrap;

    @media ${({ theme }) => theme.device.laptop} {
      width: 55vw;
    }
  }
`;

/**
 * pageQuery
 */
export const pageQuery = graphql`
  query PrismicPage($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
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
