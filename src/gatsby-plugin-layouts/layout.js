import React, { useEffect } from "react";

/**
 * Local Components
 */
import Head from "../components/globals/head";
import Nav from "../components/globals/nav";
import Footer from "../components/globals/footer";

/**
 * Local styles
 */
import { PageWrapper } from "../components/globals/wrappers";

/**
 * Layout Component
 *
 * @param {Object} props
 * @param {any} props.children
 * @param {Object} props.pageContext
 * @returns page layouts
 */
export default function Layout({ children, pageContext, ...rest }) {
  useEffect(() => {
    return () => {};
  });
  console.log(rest);
  return (
    <>
      <Head pageContext={pageContext} />
      <Nav pageContext={pageContext} />
      <PageWrapper>
        <main id="main">{children}</main>
      </PageWrapper>
      <Footer pageContext={pageContext} />
    </>
  );
}
