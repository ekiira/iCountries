import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

// styled components
const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  background-color: #e4ebed;
}
`;
const Container = styled.main`
  height: 100vh;
`;

const Header = styled.header`
  padding: 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1d1e1f;
  justify-content: center;
`;

const Grid = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const Card = styled.div`
  background-color: #fafafa;
  padding: 1rem 0.85rem;
  border-radius: 0.5rem;
`;

const Breadcrumbs = styled.li`
list-style: none;
`

// types
interface LayoutProps {
  children: React.ReactNode;
}

// components
const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container className={`container`}>
        <Header>iCountries</Header>
        <Grid>
          <div>{children}</div>
          <div></div>
          <Card></Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
