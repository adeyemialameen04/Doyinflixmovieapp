import React, { useState } from 'react';
import useFetchAllMovies from "../CustomHooks/useFetchAllMovies";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const UpcomingMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, img_base_url, isLoading, isError, error } = useFetchAllMovies(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currentPage}`, currentPage);

  if (isError) {
    return (
      <Error />
    );
  }

  const handleNxtPage = () => {
    setCurrentPage(currentPage + 1);
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
    <section className={`movies__section ${isLoading ? 'center' : ''}`}>
      <h1>Upcoming Movies</h1>
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
                    releaseDate={item.release_date}
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
    </section>
  );
};

export default UpcomingMovies;