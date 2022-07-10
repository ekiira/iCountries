import * as path from "path";
import { GatsbyNode } from "gatsby";

interface CountriesQuery {
  countries: {
    countries: {
      code: string;
    }[];
  };
}
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const { data } = await graphql<CountriesQuery>(`
    {
      countries {
        countries {
          code
        }
      }
    }
  `);
  data?.countries?.countries.forEach((node: any) => {
    createPage({
      path: node.code,
      component: path.resolve(`./src/templates/country-details.tsx`),
      context: { code: node.code },
    });
  });
};
