import { clampBuilder, ms } from "../functions/util";

/**
 * size const
 *
 * All screen sizes in pixel value
 */
export const size = {
  mobileSm: "320px",
  mobile: "375px",
  mobileLg: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopLg: "1440px",
  desktop: "1920px",
  desktopLg: "2560px",
};

/**
 * device const
 *
 * All device '@media' queries sizes in pixel value
 */
export const device = {
  mobileSm: `(min-width: ${size.mobileSm})`,
  mobile: `(min-width: ${size.mobile})`,
  mobileLg: `(min-width: ${size.mobileLg})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLg: `(min-width: ${size.laptopLg})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLg: `(min-width: ${size.desktopLg})`,
};

/**
 * colors const
 *
 * All colors
 */
export const colors = {
  black: "#111111",
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#BDBDBD",
  gray5: "#E0E0E0",
  gray6: "#F2F2F2",
  white: "#ffffff",
};

/**
 * colorPlates const
 *
 * All colors
 */
export const colorPlates = {
  primary: {
    foreground: colors.white,
    background: colors.black,
    border: colors.white,
    icon: "white",
  },
  secondary: {
    foreground: colors.black,
    background: colors.paper,
    border: colors.black,
    icon: "black",
  },
};

/**
 * fonts const
 *
 * All dynamic font sizes
 *
 * The min end of the scale uses the
 * modular scale of 1.125 (https://www.modularscale.com/?1&em&1.125)
 *
 * The max end of the scale uses the
 * modular scale of 1.5 (https://www.modularscale.com/?1&em&1.5)
 *
 * In this use, the first number is 44px divided by 16px, which
 * outputs 2.75rem into the clampBuilder function
 */
export const fonts = {
  h1: `${clampBuilder(ms(6), ms(18))}`,
  h2: `${clampBuilder(ms(5), ms(16))}`,
  h3: `${clampBuilder(ms(4), ms(14))}`,
  h4: `${clampBuilder(ms(3), ms(10))}`,
  h5: `${clampBuilder(ms(2), ms(8))}`,
  h6: `${clampBuilder(ms(1), ms(5))}`,
  titleLarge: "1rem",
  title: "0.875rem",
  titleSmall: "0.625rem",
  paragraph: "1rem",
  paragraphSmall: "0.625rem",
};
/**
 * animation const
 *
 * All animation variables
 */
export const animation = {
  timingFunction: {
    js: [0.1, 0.25, 0.3, 1],
    css: `cubic-bezier(0.1, 0.25, 0.3, 1)`,
  },
  duration: {
    100: {
      js: 0.3,
      css: `300ms`,
    },
    200: {
      js: 0.5,
      css: `500ms`,
    },
    300: {
      js: 0.6,
      css: `600ms`,
    },
  },
};

/**
 * layout const
 *
 * All layout variables
 */
export const layout = {
  outerWrapperMobile: "1em",
  outerWrapper: "8vw",
  space: {
    100: "1em",
    200: "4vw",
    300: "8vw",
  },
};

export default {
  device: device,
  colors: colors,
  animation: animation,
  size: size,
  fonts: fonts,
  layout: layout,
};
