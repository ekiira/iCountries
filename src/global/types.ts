export interface IContinentsProp {
  countries: {
    continents: { name: string }[];
  };
}

export interface ICountriesProp {
  data: {
    countries: {
      countries: {
        name: string;
        currency: string;
        code: string;
        phone: string;
        native: string;
        capital: string;
      }[];
    };
  };
}
