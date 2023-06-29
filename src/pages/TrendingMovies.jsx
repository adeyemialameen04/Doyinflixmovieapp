import useFetchAllMovies from "../CustomHooks/useFetchAllMovies";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const TrendingMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data,
    img_base_url,
    isLoading,
    isError,
    error
  } = useFetchAllMovies(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${currentPage}`, currentPage);

  // const apiKey = import.meta.env.MODE.REACT_APP_FIREBASE_API_KEY;

  useEffect(() => {
    // data && console.log(data);
    // console.log(apiKey);
  }, []);

  if (isError) {
    return (
      <Error />
    );
  }

  const handleNxtPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
    if (currentPage === data.total_pages) {
      setCurrentPage(1);
    }
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage <= 1) {
      setCurrentPage(1);
    }
  };

  return (
    <section
      className={`movies__section ${isLoading ? 'center' : ''}`}>
      <h1>Trending Movies</h1>
      <div className="container movies__container">
        {
          isLoading ? (
            <Loading />
          ) : (
            <>
              {
                data && data.results && data.results.map((item, index) => (
                  <Movie
                    key={index}
                    to={`/movie/${item.id}`}
                    originalTitle={item.title}
                    posterPath={item.poster_path}
                    imgBaseUrl={img_base_url}
                    index={index}
                    className="movie"
                    releaseDate={item.release_date}
                    rating={item.vote_average}
                  />
                ))
              }
            </>
          )
        }
      </div>
      <div className="handle__page-btns">
        <button onClick={handlePrevPage}><AiOutlineArrowLeft /></button>
        <p>{currentPage}</p>
        <button onClick={handleNxtPage}><AiOutlineArrowRight /></button>
      </div>
    </section >
  );
};

export default TrendingMovies;
