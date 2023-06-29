import Home from "./Home";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { useState, useEffect, createContext } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import './index.css';
import { auth } from './config/firebase';
import { onAuthStateChanged } from "firebase/auth";

export const ThemeContext = createContext(null);

function App() {
  const [isResizing, setIsResizing] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      document.body.classList.add('resize-animation-stopper');
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
        setIsResizing(false);
      }, 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLightMode }}>
      <div id={theme === "dark" ? "dark" : "light"}>
        <Router>
          {user ? <Navbar /> : <div className="user__not-signuped">You have to signup to continue</div>}
          <AnimatedRoutes />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
