import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/MovieDetails";
import Loading from "../components/Loading";
import useFetchAllMovies from "../CustomHooks/useFetchAllMovies";
import axios from "axios";
import useFetchTrailers from "../CustomHooks/useFetchTrailers";
import useFetchCast from "../CustomHooks/useFetchCast";
import Casts from "../components/Casts";

const TrendingMovieDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const { data, img_base_url, isLoading, isError, error } = useFetchAllMovies(url);


  // useEffect(() => {
  //   data && console.log(data);
  // }, []);


  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (isError) {
    return (
      <Error />
    );
  }

  return (
    <section className="movies__section center">
      <h1>Trending Movie Details</h1>
      <MovieDetails
        title={data.title}
        tagline={data.tagline}
        backdropPath={data.backdrop_path}
        imgBaseUrl={img_base_url}
        date={data.release_date}
        overview={data.overview}
        runtime={data.runtime}
        rating={data.vote_average}
        id={id}
        genres={data.genres}
      />
    </section>
  );
};

export default TrendingMovieDetails;
