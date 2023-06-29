import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useContext, useEffect, useRef, useState } from "react";
import { auth } from "../config/firebase";
import { ThemeContext } from "../App";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { theme, toggleTheme, isLightMode } = useContext(ThemeContext);
  const themeRef = useRef(null);
  const topRef = useRef(null);
  const placeHolderImage = "https://fakeimg.pl/600x400";

  useEffect(() => {
    if (isNavShowing) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isNavShowing]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const handleToggleTheme = () => {
    // setIsNavShowing(prev => !prev);
    setIsNavShowing(false);
    toggleTheme();
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav id="nav" className="nav">
        <div className="container nav__container">
          <div>
            {
              auth.currentUser.photoURL
                ? (<img src={auth?.currentUser?.photoURL} className="profile__picture" alt="" />) :
                <img src={placeHolderImage} />}
            <Link className="logo" to="/">DOYIN~FLIX</Link>
          </div>
          <ul className={`nav__links flex ${isNavShowing && 'show__nav'}`}>
            <div ref={themeRef} className="mode__btns"
              onClick={handleToggleTheme}
            >
              <button className="theme__btn">
                {
                  isLightMode ? <MdDarkMode /> : <MdLightMode />
                }
              </button>
            </div>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} to="/search">Search For Movies</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} to="/upcoming">Upcoming Movies</NavLink>
            </li>
            <li>
              <Link to="/">
                <button className="sign-with-google" onClick={logout}>Signout</button>
              </Link>
            </li>
          </ul>
          <div
            className="nav__btns"
            onClick={() => setIsNavShowing(prev => !prev)}
          >
            <button>
              {
                isNavShowing ? <FaTimes /> : <GiHamburgerMenu />
              }
            </button>
          </div>
        </div>
      </nav >
      {showScrollButton && <a ref={topRef} onClick={scrollToTop} className="backIcon">
        <AiOutlineArrowUp />
      </a>}
    </>
  );
};

export default Navbar;