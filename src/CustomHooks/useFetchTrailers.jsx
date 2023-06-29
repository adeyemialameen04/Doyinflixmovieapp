import React, { useState } from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetchTrailers = (url) => {
  const [trailerUrl, setTrailerUrl] = useState("");


  const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

  const fetchVideoData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tmdbApiKey}`
      }
    };

    try {
      const response = await axios.get(url, options);
      const videos = response.data.results;
      const trailer = videos && videos.find(({ type, site }) => type === 'Trailer' && site === 'YouTube');
      const { key } = trailer;
      const trailerUrl = `https://www.youtube.com/embed/${key}`;
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