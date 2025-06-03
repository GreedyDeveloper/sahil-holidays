import { createTheme } from '@mui/material/styles';

export const COLORS = {
  primary: '#2276E3',
  secondary: '#2ecc71',
  background: '#f2f2f2',
  text: '#4a4a4a;',
  muted: '#7f8c8d',
  border: '#e7e7e7',
  error: '#e74c3c',
  white: '#ffffff',
  black: '#000000'
};

export const FONT_SIZES = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
  xxl: '32px',
};

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  bold: 700,
  heavy: 900,
};

export const theme = {
  colors: COLORS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
};


export const muiTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    error: {
      main: COLORS.error,
    },
    background: {
      default: COLORS.background,
    },
    text: {
      primary: COLORS.text.replace(';', ''), // remove any trailing semicolon if present
      secondary: COLORS.muted,
    }
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: parseInt(FONT_SIZES.md, 10), // base font size in px as number
    fontWeightLight: FONT_WEIGHTS.light,
    fontWeightRegular: FONT_WEIGHTS.regular,
    fontWeightBold: FONT_WEIGHTS.bold,
    // You can also add variants for headings or body text
    h1: {
      fontSize: FONT_SIZES.xxl,
      fontWeight: FONT_WEIGHTS.heavy,
    },
    h2: {
      fontSize: FONT_SIZES.xl,
      fontWeight: FONT_WEIGHTS.bold,
    },
    body1: {
      fontSize: FONT_SIZES.md,
      fontWeight: FONT_WEIGHTS.regular,
    },
  },
  shape: {
    borderRadius: 4,
  },
  // You can add more custom properties here if needed
});