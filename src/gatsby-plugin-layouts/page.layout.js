import React from "react";

/**
 * Base Layout Component
 */
import Layout from "./layout";

/**
 * Base Styles
 */
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import ResetStyles from "../style/reset-styles";
import BaseStyles from "../style/base-styles";

const PageLayout = ({ children, pageContext, ...rest }) => (
  <ThemeProvider theme={theme}>
    <ResetStyles />
    <BaseStyles />
    <Layout pageContext={pageContext} {...rest}>
      {children}
    </Layout>
  </ThemeProvider>
);

export const BrowserPageLayout = PageLayout;
export const SsrPageLayout = PageLayout;
