import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <main className="notFound__main">
        <div className="container notFound__container">
          <h1>Ooops this page is not found</h1>
          <button className="back-btn" onClick={back}>Back</button>
          <Link to="/">Back to Homepage</Link>
        </div>
      </main>
    </>
  );
};
export default NotFound;