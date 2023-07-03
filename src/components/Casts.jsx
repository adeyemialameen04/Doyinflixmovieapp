import React from 'react';

const Casts = ({ castImg, imgBaseUrl, castName, character }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";

  return (
    <div className="castCrew">
      <div className="castCrew__img-container">
        {
          castImg ? (
            <img src={`${imgBaseUrl}/${castImg}`} className="castCrew__img" alt={castName} />
          ) : (
            <img src={placeHolderImage} className="castCrew__img" />
          )
        }
      </div>
      <div className="castCrewDetail">
        <p><span className="cast-name">{castName}</span> as <span className="cast-character">{character}</span></p>
      </div>
    </div>
  );
};

export default Casts;