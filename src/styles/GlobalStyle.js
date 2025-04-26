import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-text: ${({ theme }) => theme.colors.text};
    --font-size-md: ${({ theme }) => theme.fontSizes.md};
    --font-weight-bold: ${({ theme }) => theme.fontWeights.bold};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    color: var(--color-text);
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
