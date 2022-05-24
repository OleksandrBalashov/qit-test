import { useCallback, useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import CheckBox from "./components/Checkbox";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner";
import useFetch from "./hooks/useFetch";
import { IRes } from "./interfaces/interfaces";

function App() {
  const [countries, setCountries] = useState<[] | IRes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(15);
  const { data, loading, error } = useFetch("/all?fields=name,region,area");

  useEffect(() => {
    setCountries(data);
  }, [data]);

  const filteredByArea = useCallback(() => {
    const filteredCountries = countries
      .map((el) => ({ ...el }))
      .sort((a, b) => a.area - b.area);

    setCountries([...filteredCountries]);
  }, [countries]);

  const filteredByRegion = useCallback(
    (value: string) => {
      const filteredRegion = countries
        .filter(({ region }) => region === value)
        .map((el) => ({ ...el }));

      setCountries(filteredRegion);
    },
    [countries]
  );

  const handleCheckBox = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value, checked },
      } = e;

      if (!checked) {
        return setCountries(data);
      }

      if (value === "Smallest") {
        return filteredByArea();
      }

      filteredByRegion(value);
    },
    [data, filteredByArea, filteredByRegion]
  );

  // Get current countries
  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirst, indexOfLast);

  // Change Page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1 className='text-center text-secondary'>Error</h1>;
  }

  return (
    <div className='container pt-4' style={{ maxWidth: 1100 }}>
      <h1 className='text-primary mb-3 text-center fs-1 text-danger'>
        Countries
      </h1>
      <CheckBox handleChange={handleCheckBox} />
      <CountriesList countries={currentCountries} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
