import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  height: 100vh;

}
a {
  color: #1d1e1f;
  text-decoration: none;
}
`;

export const Wrapper = styled.div`
  background-color: #e4ebed;
  height: 100vh;
`;

export const Container = styled.main`
  padding: 1rem 3rem;
`;

export const Card = styled.div`
  background-color: #fafafa;
  padding: 2rem;
  border-radius: 0.5rem;
  height: 450px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #80808080;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 3px solid #80808080;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
