import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import { IContinentsProp } from "../types";

// styled components
const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  background-color: #e4ebed;
  height: 100vh;

}
`;
const Container = styled.main`
  padding: 1rem 3rem;
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

const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  display: inline-flex;
`;

const BreadCrumbArrow = styled.span`
  margin: 0 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1d1e1f;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: #1d1e1f;
  }
`;

// types
interface LayoutProps {
  children: React.ReactNode;
  country?: string;
}

// components
const Layout = ({ children, country }: LayoutProps) => {
  const { countries }: IContinentsProp = useStaticQuery(graphql`
    query CountriesQuery {
      countries {
        continents {
          name
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>iCountries</Header>

      <Container className={`container`}>
        <Breadcrumbs>
          <li>
            <StyledLink to="/" activeStyle={{ fontWeight: "bold" }}>
              All Countries
            </StyledLink>
          </li>
          {country && (
            <>
              <BreadCrumbArrow> {">"}</BreadCrumbArrow>

              <li>
                <StyledLink to="/africa" activeStyle={{ fontWeight: "bold" }}>
                  Africa
                </StyledLink>
              </li>
            </>
          )}
        </Breadcrumbs>
        <Grid>
          <div>{children}</div>
          <div></div>
          <Card>
            <div>Continents</div>
            {countries?.continents.map((continent, index) => (
              <ul key={index}>
                <li>{continent.name}</li>
              </ul>
            ))}
          </Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
