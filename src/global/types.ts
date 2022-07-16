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

export interface ICountryProp {
  data: {
    countries: {
      country: {
        name: string;
        code: string;
        emoji: string;
        capital:string;
        continent: {
          name:string
        }
        phone: string;
        currency: string; 
        languages: {
          name: string;
        }[];
      };
    };
  };
}
