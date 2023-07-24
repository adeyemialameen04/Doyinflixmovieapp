import SearchMovies from "../pages/SearchMovies";
import TrendingMovieDetails from "../pages/TrendingMovieDetails";
import SearchMoviesDetails from "../pages/SearchMoviesDetails";
import UpcomingMovies from "../pages/UpcomingMovies";
import UpcomingMoviesDetails from "../pages/UpcomingMoviesDetails";
import Home from "../Home";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Auth from "./Auth";
import NotFound from "./NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/movie/:id" element={<TrendingMovieDetails />} />
        <Route path="/search/:id" element={<SearchMoviesDetails />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/upcoming/:id" element={<UpcomingMoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;