import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import RatingStar from "./RatingStar";

const Movie = ({ to, index, originalTitle, posterPath, imgBaseUrl, className, releaseDate, rating }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";
  // const linkRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px 0px 200px 0px",
  //     threshold: 0, // Customize the threshold value as needed
  //   };

  //   const handleIntersection = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         linkRef.current.style.left = "0px";
  //         linkRef.current.style.transform = "scale(1)";
  //       } else {
  //         linkRef.current.style.position = "relative";
  //         linkRef.current.style.left = "-80px";
  //         linkRef.current.style.transform = "scale(0)";
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, options);
  //   observer.observe(linkRef.current); // Start observing the Link element

  //   return () => observer.disconnect(); // Cleanup the observer when the component unmounts
  // }, []);

  const releaseYear = new Date(releaseDate).getFullYear();

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