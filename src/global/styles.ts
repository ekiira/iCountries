import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  background-color: #e4ebed;
  height: 100vh;

}
a {
  color: #1d1e1f;
  text-decoration: none;
}
`;
export const Container = styled.main`
  padding: 1rem 3rem;
  height: 100%;
`;

export const Card = styled.div`
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 0.5rem;

  ul {
    list-style: none;
    padding: 0;
  }
`;
