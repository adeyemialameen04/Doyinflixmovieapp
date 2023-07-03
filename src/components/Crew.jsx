import React from 'react';

const Crew = ({ crewImg, imgBaseUrl, crewName, job }) => {
  const placeHolderImage = "https://fakeimg.pl/600x400";

  return (
    <div className="castCrew">
      <div className="crew__img-container">
        {
          crewImg ? (
            <img src={`${imgBaseUrl}/${crewImg}`} className="castCrew__img" alt={crewName} />
          ) : (
            <img src={placeHolderImage} className="castCrew__img" />
          )
        }
      </div>
      <div className="castCrewDetail">
        <p><span className="crew-name">{crewName}</span></p>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default Crew;