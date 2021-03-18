import React, { useEffect } from 'react';

/**
 * Local Components
 */
import Head from './globals/head';
import Nav from './globals/nav';
import Footer from './globals/footer';

/**
 * Local styles
 */
import { PageWrapper } from './layout-components';

/**
 * Code Highlighting styles
 */

/**
 * Layout Component
 *
 * @param {Object} props
 * @param {any} props.children
 * @param {Object} props.pageContext
 * @returns page layouts
 */
export default function Layout({ children, pageContext }) {
  useEffect(() => {
    return () => {};
  });
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