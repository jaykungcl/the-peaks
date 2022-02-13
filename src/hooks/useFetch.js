import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";

import { SortContext } from "../context/SortContext";

export const useFetch = (_params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const params = useRef(_params).current;

  const { sort } = useContext(SortContext);

  useEffect(() => {
    if (sort) {
      setError(null);
      axios
        .get(
          `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail%2Cbody` +
            `&order-by=${sort}`,
          { params }
        )
        .then((res) => {
          setData(res.data.response.results);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    }
  }, [params, sort]);

  return { data, error };
};
