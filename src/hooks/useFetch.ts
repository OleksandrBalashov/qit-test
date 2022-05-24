import { IRes } from "./../interfaces/interfaces";
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v2";
const controller = new AbortController();

function useFetch(url: string) {
  const [data, setData] = useState<[] | IRes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then(({ data }) => {
        setLoading(false);

        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
