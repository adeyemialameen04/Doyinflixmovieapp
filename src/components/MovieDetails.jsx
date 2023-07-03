import React, { useEffect, useState } from 'react';
import RatingStar from "./RatingStar";
import useFetchTrailers from "../CustomHooks/useFetchTrailers";
import useFetchCast from "../CustomHooks/useFetchCast";
import { FaTimes } from "react-icons/fa";
import Casts from "./Casts";
import Crew from "./Crew";

const MovieDetails = ({ title, tagline, backdropPath, runtime, date, overview, imgBaseUrl, rating, id, genres }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const { data: trailerUrl } = useFetchTrailers(movieVideoUrl);
  const { data: castData } = useFetchCast(castUrl);
  const year = new Date(date).getFullYear();
  const hours = Math.floor(runtime / 60);
  const remainingMinutes = runtime % 60;
  const [isTrailerShowing, setIsTrailerShowing] = useState(false);

  return (
    <>
      <section className="movie__details-section">
        <div className="movie__details-container">
          <div className="movie__details">
            <h1 className="movie__details-name">{title}</h1>
            <h6>{tagline}</h6>
            <div className="time">
              {hours && <p>{hours}h {remainingMinutes}m</p>}
              {year && <p>{year}</p>}
              <RatingStar rating={rating} />
            </div>
            <h6>Overview</h6>
            {overview && <p className="overview">{overview}</p>}
            <button
              className="watch__trailer-btn"
              onClick={() => setIsTrailerShowing(true)}
            >Watch Trailer</button>
          </div>
          <div className="background__img-container">
            <div className="gradient"></div>
            {
              backdropPath ? (
                <img src={`${imgBaseUrl}/${backdropPath}`} className="movie__img" alt={title} />
              ) : <img src={placeHolderImage} className="movie__img" />
            } {
              !backdropPath && (
                <p>Image not Found</p>
              )
            }
          </div>
        </div>
      </section>
      <div className={`trailer__overlay ${isTrailerShowing ? "open-trailer" : ""}`}>
        <div className="trailer__container">
          {isTrailerShowing &&
            <iframe onClick={(e) => e.stopPropagation()} className="trailer" src={trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          }
          <button
            className="close-trailer"
            onClick={() => setIsTrailerShowing(false)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <div className="container genres">
        {
          genres &&
          genres.map(genre => (
            <button key={genre.id}>{genre.name}</button>
          ))
        }
      </div>
      <h1>Cast</h1>
      <section className="casts-crew__container container">
        {
          castData &&
          castData.cast &&
          castData.cast.map(cast => (
            <Casts key={cast.cast_id} castName={cast.original_name} character={cast.character} castImg={cast.profile_path} imgBaseUrl={imgBaseUrl} />
          ))
        }
      </section>
      <h1>Crew</h1>
      <section className="casts-crew__container container">
        {
          castData &&
          castData.crew &&
          castData.crew.map(crew => (
            <Crew crewImg={crew.profile_path} key={crew.id} imgBaseUrl={imgBaseUrl} crewName={crew.original_name} job={crew.job} />
          ))
        }
      </section>
    </>
  );
};

export default MovieDetails;