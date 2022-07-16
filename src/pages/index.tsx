import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { ICountriesProp } from "../global/types";
import { Card } from "../global/styles";

const IndexPage = ({ data }: ICountriesProp) => {
  const { countries } = data.countries;
  return (
    <Layout>
      <div>
        <Card>
          <div>Continents</div>
          {countries.map((country, index) => (
            <ul key={index}>
              <li>
                {" "}
                <Link to={`/${country.code}`}>
                  {country.name} - {country.code}
                </Link>{" "}
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
      }
    }
  }
`;
