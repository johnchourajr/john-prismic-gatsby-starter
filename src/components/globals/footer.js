import React from 'react';
import styled from 'styled-components';

/**
 *
 */
import LinkExternal from '../link-external';
import useNavData from '../../hooks/use-nav-data';
import Link from '../link';

/**
 * Footer component
 *
 * @param {Object} props
 * @param {Object} props.pageContext
 */
export default function Footer({ pageContext }) {
  const navData = useNavData();

  return (
    <FooterContainer id="footer" data-page={pageContext.uid}>
      <FooterRow className="links">
        <FooterLinksWrapper>
          {navData.map(({ node: { data, url } }, i) => {
            const pathUrl = url === '/home' ? `/` : `${url}`;
            return (
              <Link key={i} to={pathUrl}>
                {data.title}
              </Link>
            );
          })}
        </FooterLinksWrapper>
        <LegalWrapper>
          © Copyright 2021 John Choura. Site by{' '}
          <LinkExternal href="https://john.design">John Choura</LinkExternal>.
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
  padding: ${(props) => props.theme.layout.space[200]} 0;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.layout.space[200]};
`;

const LegalWrapper = styled.h6`
  margin: 0;
`;
