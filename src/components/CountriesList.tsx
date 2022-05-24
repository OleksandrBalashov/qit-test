import { ICountries } from "../interfaces/interfaces";
import { v4 as uuidv4 } from "uuid";

const CountriesList = ({ countries }: ICountries) => {
  return (
    <ul className='list-group mb-4'>
      {countries.map(({ name, region, area }) => (
        <li key={uuidv4()} className='list-group-item align-items-center'>
          <h2 className='me-4 mb-0 text-primary text-center fs-3'>{name}</h2>
          <div className='text-center'>
            <span className='me-3'>
              Region: <span className='text-secondary fs-5 mb-0'>{region}</span>
            </span>
            <span>
              Area: <span className='text-secondary fs-5 mb-0'>{area} km</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
