export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1025,
};

export const device = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
};

// Optional: Helper function to check current screen size
export const isMobile = () => window.innerWidth <= BREAKPOINTS.mobile;
export const isTablet = () =>
  window.innerWidth > BREAKPOINTS.mobile && window.innerWidth <= BREAKPOINTS.tablet;
export const isDesktop = () => window.innerWidth >= BREAKPOINTS.desktop;