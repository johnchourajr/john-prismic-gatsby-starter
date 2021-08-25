import React, { useEffect } from "react";
import styled from "styled-components";
import { m, LazyMotion, domAnimation, useViewportScroll } from "framer-motion";
import Link from "../helpers/link";
import LinkExternal from "../helpers/link-external";

/**
 * Data hooks
 */
import useNavData from "../../hooks/use-nav-data";
import SvgLoader from "../svg/index";
import { siteMetadata } from "../../../gatsby-config";

/**
 * Nav component
 *
 * @param {Object} props
 */
export default function Nav(props) {
  const navData = useNavData();
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 50 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const wrapperVariants = {
    pre: {
      opacity: 0,
      y: -10,
      transition: {
        delay: 0.3,
      },
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <NavWrapper
        initial="pre"
        animate={hidden ? "hidden" : "visible"}
        variants={wrapperVariants}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.8 }}
      >
        <Link className="button" to="/">
          {siteMetadata.short_name}
        </Link>
        <NavLinksWrapper>
          {navData.map(({ node: { data, uid } }, i) => {
            const pathUrl = uid === "home" ? `/` : `/${uid}`;
            return (
              <Link key={i} to={pathUrl}>
                {data.title}
              </Link>
            );
          })}
          {siteMetadata.short_name === "JPGS" && ( // DELETE ME
            <LinkExternal
              href="https://github.com/johnchourajr/john-prismic-gatsby-starter"
              blank
            >
              <SvgLoader svg="GitHub" color="black" />
            </LinkExternal>
          )}
        </NavLinksWrapper>
      </NavWrapper>
    </LazyMotion>
  );
}

const NavWrapper = styled(m.nav)`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.theme.layout.space[100]}
    ${(props) => props.theme.layout.space[100]} 0;
  width: calc(100vw - (${(props) => props.theme.layout.space[100]} * 2));
  left: 0;
  z-index: 10;

  @media ${(props) => props.theme.device.tablet} {
    margin: ${(props) => props.theme.layout.space[200]}
      ${(props) => props.theme.layout.space[300]} 0;
    width: calc(100vw - (${(props) => props.theme.layout.space[300]} * 2));
  }

  svg {
    fill: ${(props) => props.theme.colors.black};
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    padding-left: ${(props) => props.theme.layout.space[200]};
  }
`;
