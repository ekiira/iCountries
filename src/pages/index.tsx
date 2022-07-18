import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { ICountriesProp } from "../global/types";
import { Card, StyledLink, Heading } from "../global/styles";

const IndexPage = ({ data }: ICountriesProp) => {
  const { countries } = data.countries;
  return (
    <Layout>
      <div>
        <Card>
          <Heading>
            <span>Total: </span> <span>{countries.length}</span>
          </Heading>
          {countries.map((country, index) => (
            <ul key={index}>
              <li>
                {" "}
                <StyledLink to={`/${country.code}`}>
                  {country.name} {country.emoji}
                </StyledLink>{" "}
              </li>
            </ul>
          ))}
        </Card>
      </div>

      <div></div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    countries {
      countries {
        name
        code
        emoji
      }
    }
  }
`;
