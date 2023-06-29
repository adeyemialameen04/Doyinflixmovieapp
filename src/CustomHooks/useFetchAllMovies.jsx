import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchAllMovies = (url, currentPage) => {

  // const img_base_url = "https://image.tmdb.org/t/p/w500/";
  const img_base_url = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A'
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