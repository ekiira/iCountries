import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Card } from "../global/styles";
import styled from "styled-components";
import { ICountryProp } from "../global/types";

const Country = ({ data }: ICountryProp) => {
  const { name, code, emoji, capital, continent, phone, currency, languages } =
    data.countries.country;
  return (
    <Layout country={{ name, code }}>
      <div>
        <Card>
          <div>
            <Head>
              {name} {emoji}
            </Head>
          </div>

          <div>
            {capital && (
              <span>
                <strong>Capital:</strong> {capital}
              </span>
            )}{" "}
          </div>
          <div>
            <span>
              <strong>Continent:</strong> {continent.name}
            </span>
          </div>
          <div>
            <span>
              <strong>Phone code:</strong> {phone}
            </span>
          </div>
          <div>
            <span>
              <strong>Currency:</strong> {currency}
            </span>
          </div>

          {languages.length > 0 && (
            <div>
              <div>
                <strong>Language(s):</strong>{" "}
                {languages.map((language, index) => (
                  <span key={index}>{language.name}</span>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Country;

export const query = graphql`
  query CountryPageQuery($code: ID!) {
    countries {
      country(code: $code) {
        name
        code
        emoji
        capital
        continent {
          name
        }
        phone
        currency
        languages {
          name
        }
      }
    }
  }
`;

const Head = styled.h2`
  text-align: center;
  margin-top: 0;
`;
