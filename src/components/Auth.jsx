import { useEffect, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

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

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="signin">
        <button
          onClick={signInWithGoogle}
          className="sign-with-google"
        >
          Sign in with google
        </button>
      </div>
    );
  }

  return (
    <div className="signin">
      <p className="welcome__txt">
        Welcome <span>{auth?.currentUser?.displayName}</span>
      </p>
    </div>
  );
};

export default Auth;
