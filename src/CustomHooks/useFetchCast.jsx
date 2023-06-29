import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useFetchCast = (url) => {
  const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
  const img_base_url = "https://image.tmdb.org/t/p/w500/";
  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tmdbApiKey}`
      }
    };

    const response = await axios.get(url, options);
    // console.log(response.data);
    return response.data;
  };

  const { data, refetch, isLoading, isError, error } = useQuery(['fetchCastData'], fetchData);
  // console.log(data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return {
    data,
    img_base_url,
    refetch,
    isLoading,
    isError,
    error
  };
};

export default useFetchCast;