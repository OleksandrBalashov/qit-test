export interface IRes {
  area: number;
  independent: boolean;
  name: string;
  region: string;
}

export interface ICountries {
  countries: IRes[] | [];
}

export interface IProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface IPagination {
  countriesPerPage: number;
  totalCountries: number;
  paginate: (number: number) => void;
}
