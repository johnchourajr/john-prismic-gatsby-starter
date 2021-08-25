import React from "react";
import styled from "styled-components";

/**
 *
 */
import LinkExternal from "../helpers/link-external";
import useNavData from "../../hooks/use-nav-data";
import Link from "../helpers/link";
import { siteMetadata } from "../../../gatsby-config";

/**
 * Footer component
 *
 * @param {Object} props
 * @param {Object} props.context
 */
export default function Footer({ context }) {
  const navData = useNavData();

  return (
    <FooterContainer id="footer" data-page={context.uid}>
      <FooterRow className="links">
        <FooterLinksWrapper>
          {navData.map(({ node: { data, uid } }, i) => {
            const pathUrl = uid === "home" ? `/` : `/${uid}`;
            return (
              <Link key={i} to={pathUrl}>
                {data.title}
              </Link>
            );
          })}
        </FooterLinksWrapper>
        <LegalWrapper>
          © Copyright 2021 {siteMetadata.author}.
          {siteMetadata.author === "John Choura" && ( // DELETE ME
            <>
              {" "}
              Site by{" "}
              <LinkExternal href="https://john.design">
                John Choura
              </LinkExternal>
              .
            </>
          )}
        </LegalWrapper>
      </FooterRow>
    </FooterContainer>
  );
}

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 ${(props) => props.theme.layout.space[300]};
  gap: 2rem;
`;

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.layout.space[300]} 0
    ${(props) => props.theme.layout.space[200]};
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.layout.space[200]};
`;

const LegalWrapper = styled.p`
  margin: 0;
`;
