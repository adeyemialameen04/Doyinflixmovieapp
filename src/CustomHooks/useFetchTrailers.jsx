import React, { useState } from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchTrailers = (url) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchVideoData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTA3Nzc1MWRmYmQxYmFjZDcwMDAzZmYyNzUxODg2YyIsInN1YiI6IjYzZGQzYjExY2U1ZDgyMDA4NDhjNzc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5Z2ljr4fG3Nmoc1R2U0MgiEvz-E49MPNsmwbHZIv8A'
      }
    };

    try {
      const response = await axios.get(url, options);
      const videos = response.data.results;
      // console.log(videos);
      const trailer = videos && videos.find(({ type, site }) => type === 'Trailer' && site === 'YouTube');
      // console.log(trailer);
      const { key } = trailer;
      const trailerUrl = `https://www.youtube.com/embed/${key}`;
      // console.log(trailerUrl);
      setTrailerUrl(trailerUrl);
      return trailerUrl;
    } catch (error) {
      console.log('Error fetching video data:', error);
    }
  };

  const { data } = useQuery(["data"], fetchVideoData);
  return { data: data || [] };
};

export default useFetchTrailers;