import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <main className="notFound__main">
      <div className="container notFound__container">
        <h1>Ooops this page is not found</h1>
        <Link to="/">Back to Homepage</Link>
      </div>
    </main>
  );
};
export default NotFound;