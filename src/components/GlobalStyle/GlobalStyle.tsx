import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
.global-styles {
  ${(props: any) => props.children}
}
`;

export default GlobalStyle;
