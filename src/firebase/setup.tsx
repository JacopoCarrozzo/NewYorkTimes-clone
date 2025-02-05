import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signOut, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCctaJR7v9TO4-LTfeC6DwonPfIhVqZuPg",
  authDomain: "newyorktimes-clone-94463.firebaseapp.com",
  projectId: "newyorktimes-clone-94463",
  storageBucket: "newyorktimes-clone-94463.appspot.com", // CORRETTO
  messagingSenderId: "17858991882",
  appId: "1:17858991882:web:bff43e103d9f1a59b0ccf3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

facebookProvider.setCustomParameters({
  display: "popup",
});

export const loginWithFacebook = async () => {
  try {
    await signOut(auth); // Evita richieste multiple
    const result = await signInWithPopup(auth, facebookProvider);
    console.log("User Info:", result.user);
    return result.user;
  } catch (error) {
    console.error("Errore login con Facebook:", error);
    throw error;
  }
};

export { app };
