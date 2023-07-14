import { useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import './auth.css';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };


  if (!user) {
    return (
      <div className="signin">
        <button onClick={signInWithGoogle} className="sign-with-google">Sign in with google</button>
      </div>
    );
  }

  return (
    <div className="signin">
      <p className="welcome__txt">
        Welcome <span>{auth?.currentUser?.displayName}</span>
      </p>
      <Link className="proceed__link" to="/home">Proceed to App</Link>
    </div>
  );
};

export default Auth;