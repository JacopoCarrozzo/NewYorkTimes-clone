/* global FB */
import React, { useEffect, useState } from "react";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import github from "../images/github.png";
import TheNewYorkTimes from "../images/TheNewYorkTimes.png";
import backarrow from "../images/backarrow.png";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, facebookProvider, gitProvider, googleProvider } from "../firebase/setup.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

// Funzione per caricare l'SDK di Facebook
const loadFacebookSDK = () => {
  return new Promise((resolve) => {
    if (document.getElementById("facebook-jssdk")) {
      resolve();
      return;
    }

    window.fbAsyncInit = function () {
      if (typeof FB !== "undefined") {
        FB.init({
          appId: "{your-app-id}", // 🔹 Sostituisci con il tuo App ID di Facebook
          cookie: true,
          xfbml: true,
          version: "{api-version}", // 🔹 Esempio: 'v18.0'
        });

        FB.AppEvents.logPageView();
      }
      resolve();
    };

    let js,
      fjs = document.getElementsByTagName("script")[0];
    js = document.createElement("script");
    js.id = "facebook-jssdk";
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  });
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loadFacebookSDK(); // 🔹 Carica l'SDK di Facebook

    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          if (result.providerId === facebookProvider.providerId) {
            toast.success("Logged in with Facebook");
          } else if (result.providerId === gitProvider.providerId) {
            toast.success("Logged in with GitHub");
          }
          navigate("/");
        }
      } catch (err) {
        console.error("Errore nel redirect:", err);
        toast.error(err.message || "An error occurred");
      }
    };

    checkRedirect(); // 🔹 Controlla il login con redirect
  }, [navigate]);

  // Login con email e password
  const emailLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred");
    }
  };

  // Login con Google
  const googleLogin = async () => {
    try {
      if (auth.currentUser) {
        await auth.signOut();
      }
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in successfully");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred");
    }
  };

  // Login con Facebook
  const facebookLogin = async () => {
    try {
      await loadFacebookSDK();
      if (window.FB) {
        window.FB.login(
          (response) => {
            if (response.authResponse) {
              console.log("Facebook login successful", response);
              toast.success("Logged in successfully!");
              setTimeout(() => navigate("/"), 2000);
            } else {
              toast.error("Facebook login failed.");
            }
          },
          { scope: "email,public_profile" }
        );
      } else {
        toast.error("Facebook SDK not loaded.");
      }
    } catch (err) {
      console.error("Errore:", err);
      toast.error(err.message || "An error occurred");
    }
  };
  

  const gitLogin = async () => {
    try {
      if (auth.currentUser) {
        await auth.signOut();
      }
      await signInWithRedirect(auth, gitProvider);
    } catch (err) {
      console.error("Errore:", err);
      toast.error(err.message || "An error occurred");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <div className="shadow-md p-4 flex justify-center">
          <img src={TheNewYorkTimes} className="w-52" alt="The New York Times Logo" />
        </div>

        <Link to="/">
          <div className="flex items-center justify-start bg-gray-100">
            <div className="ml-[33%] mt-4 flex items-center">
              <img src={backarrow} className="w-5 h-5 cursor-pointer" alt="Back arrow" />
              <h1 className="rounded-md cursor-pointer transition-colors font-bold">Back to home</h1>
            </div>
          </div>
        </Link>

        <div className="flex justify-center bg-gray-100 py-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mt-[-23px]">
            <h1 className="text-gray-700 font-medium text-3xl text-center">
              Log in or create an account
            </h1>

            <div className="mt-6">
              <label className="block font-bold text-base">Email Address</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-2 border border-black rounded mt-2" placeholder="Enter your email" />
        
              <label className="block font-bold text-base">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-full p-2 border border-black rounded mt-2" placeholder="Enter your password" />
            </div>

            <button onClick={emailLogin} className="bg-black text-white font-semibold w-full p-2 mt-4 rounded hover:bg-gray-800 transition">
              Create Account
            </button>

            <h1 className="text-center my-4 text-gray-600">or</h1>

            <p className="text-center text-sm text-gray-500">
              By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.
            </p>

            <div onClick={googleLogin} className="mt-4 space-y-3">
              <button className="border border-black w-full p-2 flex items-center justify-center rounded">
                <img src={google} className="w-5 h-5 mr-3" alt="Google logo"/>
                <span className="font-bold">Continue with Google</span>
              </button>

              <button onClick={facebookLogin} className="border border-black w-full p-2 flex items-center justify-center rounded">
                <img src={facebook} className="w-5 h-5 mr-3" alt="Facebook logo" />
                <span className="font-bold">Continue with Facebook</span>
              </button>

              <button onClick={gitLogin} className="border border-black w-full p-2 flex items-center justify-center rounded">
                <img src={github} className="w-5 h-5 mr-3" alt="GitHub logo" />
                <span className="font-bold">Continue with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
