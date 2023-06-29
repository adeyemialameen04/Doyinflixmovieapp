import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

const Movie = ({ to, index, originalTitle, posterPath, imgBaseUrl, className, releaseDate, rating }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";

  return (
    <Link className="movie" key={index} to={to}>
      <div className="img__container">
        {
          posterPath ? (
            <img src={`${imgBaseUrl}/${posterPath}`} className="movie__img" alt={originalTitle} />
          ) : <img src={placeHolderImage} className="movie__img" />
        }
        {
          !posterPath && (
            <h1>Image Not Found</h1>
          )
        }
      </div>
      <div className="movie__list-details">
        <>
          {originalTitle && <p className="movie__list-title">{originalTitle}</p>}
        </>
        <div className="rating">
          <p className="release__date">{releaseDate}</p>
          <RatingStar rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default Movie;