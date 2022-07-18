import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  min-height: 100vh;
  color: #1d1e1f;

}
a {
  color: #1d1e1f;
  text-decoration: none;
}
`;

export const Wrapper = styled.div`
  background-color: #e4ebed;
  min-height: 100vh;
`;

export const Container = styled.main`
  padding: 1rem 3rem;
  @media screen and (max-width: 767px) {
    padding: 1rem 0.5rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem 1rem;
  }
  @media (min-width: 1280px)  {
    max-width: 1280px;
    margin: 0 auto;
  }
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

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export const Heading = styled.h2`
  display: flex;
  justify-content: end;
  margin-top: 0;
  border-bottom: 1px solid #1d1e1f;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1d1e1f;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: #1d1e1f;
  }
`;
