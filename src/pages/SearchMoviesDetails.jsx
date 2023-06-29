import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchAllMovies from "../CustomHooks/useFetchAllMovies";
import MovieDetails from "../components/MovieDetails";
import Loading from "../components/Loading";

const SearchMoviesDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const { data, img_base_url, isLoading, isError, error } = useFetchAllMovies(url);

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
      />
    </section>
  );
};

export default SearchMoviesDetails;
