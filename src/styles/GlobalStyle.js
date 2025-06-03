import { Global, css, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();
  console.log('theme', theme);
  
  return (
    <Global
      styles={(theme) => css`
      :root {
        --color-primary: ${theme.colors.primary};
        --color-secondary: ${theme.colors.secondary};
        --color-text: ${theme.colors.text};
        --font-size-md: ${theme.fontSizes.md};
        --font-weight-bold: ${theme.fontWeights.bold};
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', sans-serif;
        color: var(--color-text);
        background-color: ${theme.colors.background};
      }
    `} />
  );
};

export default GlobalStyle;
