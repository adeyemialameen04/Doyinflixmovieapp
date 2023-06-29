import React from 'react';

const Casts = ({ castImg, imgBaseUrl, castName, character }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";

  return (
    <div className="cast">
      <div className="cast__img-container">
        {
          castImg ? (
            <img src={`${imgBaseUrl}/${castImg}`} className="cast__img" alt={castName} />
          ) : (
            <img src={placeHolderImage} className="cast__img" />
          )
        }
      </div>
      <div className="castName">
        <p><span className="cast-name">{castName}</span> as <span className="cast-character">{character}</span></p>
      </div>
    </div>
  );
};

export default Casts;