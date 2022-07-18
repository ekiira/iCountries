import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import { Card, Heading } from "../global/styles";
import { ICountryProp } from "../global/types";

const Country = ({ data }: ICountryProp) => {
  const { name, code, emoji, capital, continent, phone, currency, languages } =
    data.countries.country;
  return (
    <Layout country={{ name, code }}>
      <div>
        <Card>
          <div>
            <Heading>
              {name} {emoji}
            </Heading>
          </div>

          <Block>
            {capital && (
              <span>
                <strong>Capital:</strong> {capital}
              </span>
            )}{" "}
          </Block>
          <Block>
            <span>
              <strong>Continent:</strong> {continent.name}
            </span>
          </Block>
          <Block>
            <span>
              <strong>Phone code:</strong> {phone}
            </span>
          </Block>
          <Block>
            <span>
              <strong>Currency:</strong> {currency}
            </span>
          </Block>

          {languages.length > 0 && (
            <>
              {languages.length > 1 ? (
                <Block>
                  <div>
                    <strong>Language(s):</strong>{" "}
                    {languages.map((language, index) => (
                      <>
                        <span key={index}>{language.name}</span> {` `}
                      </>
                    ))}
                  </div>
                </Block>
              ) : (
                <Block>
                  <div>
                    <strong>Language(s):</strong>{" "}
                    {languages.map((language, index) => (
                      <span key={index}>{language.name}</span>
                    ))}
                  </div>
                </Block>
              )}
            </>
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

const Block = styled.div`
  margin-bottom: 1rem;
`;
