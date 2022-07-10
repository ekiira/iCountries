import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Country = (props: any) => {
  const { name } = props.data.countries.country;

  return (
    <Layout country="Africa">
      <div>See {name}</div>
    </Layout>
  );
};

export default Country;

export const query = graphql`
  query CountryPageQuery($code: ID!) {
    countries {
      country(code: $code) {
        name
      }
    }
  }
`;
