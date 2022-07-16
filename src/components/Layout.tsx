import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { IContinentsProp } from "../global/types";
import { Card, Container, GlobalStyle, Wrapper } from "../global/styles";

// types
interface LayoutProps {
  children: React.ReactNode;
  country?: {
    name: string;
    code: string;
  };
}

// component
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
      <Wrapper>
        <Header>iCountries</Header>

        <Container className={`container`}>
          <Breadcrumbs>
            <li>
              <StyledLink to="/" activeStyle={{ fontWeight: "bold" }}>
                All Countries
              </StyledLink>
            </li>
            {country?.name && (
              <>
                <BreadCrumbArrow> {">"}</BreadCrumbArrow>

                <li>
                  <StyledLink to={`/${country.code}`} activeStyle={{ fontWeight: "bold" }}>
                    {country.name}
                  </StyledLink>
                </li>
              </>
            )}
          </Breadcrumbs>
          <Grid>
            <GridWide>{children}</GridWide>
            <Card>
              {countries?.continents.map((continent, index) => (
                <ul key={index}>
                  <li>{continent.name}</li>
                </ul>
              ))}
            </Card>
          </Grid>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;

// styled components


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
  gap: 3rem;
`;

const GridWide = styled.div`
  grid-column: span 2 / span 2;
`;

const Breadcrumbs = styled.ul`
  padding: 0;
  list-style: none;
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
