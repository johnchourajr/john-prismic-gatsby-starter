import React from 'react';

/**
 * Base Layout Component
 */
import Layout from './layout';

/**
 * Base Styles
 */
import { ThemeProvider } from 'styled-components';
import theme from '../style/theme';
import ResetStyles from '../style/reset-styles';
import BaseStyles from '../style/base-styles';
import AnimationStyles from '../style/animation-styles';

const PageLayout = ({ children, pageContext, ...rest }) => (
  <ThemeProvider theme={theme}>
    <ResetStyles />
    <BaseStyles />
    <AnimationStyles />
    <Layout pageContext={pageContext} {...rest}>{children}</Layout>
  </ThemeProvider>
);

export const BrowserPageLayout = PageLayout;
export const SsrPageLayout = PageLayout;
