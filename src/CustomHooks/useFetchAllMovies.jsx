import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchAllMovies = (url, currentPage) => {

  const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
  const img_base_url = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tmdbApiKey}`
      }
    };

    const response = await axios.get(url, options);
    return response.data;
  };

  const { data, refetch, isLoading, isError, error } = useQuery(['fetchData', currentPage], fetchData);

  return {
    data,
    img_base_url,
    refetch,
    isLoading,
    isError,
    error
  };
};

export default useFetchAllMovies;