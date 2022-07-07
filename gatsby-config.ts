import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `iCountries`,
    siteUrl: `https://www.yourdomain.tld`,
    description:
      "A cumilated list of countries in the world, with their respective population, area, and currency.",
  },

  graphqlTypegen: true,
  plugins: [`gatsby-plugin-styled-components`,  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "Countries",
      fieldName: "countries",
      url: "https://countries.trevorblades.com/graphql",
    },
  },],
};

export default config;
