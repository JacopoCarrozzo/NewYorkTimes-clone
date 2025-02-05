import React, { useState } from 'react' 
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import github from "../images/github.png"
import TheNewYorkTimes from "../images/TheNewYorkTimes.png"
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth'
import { auth, facebookProvider, gitProvider, googleProvider } from "../firebase/setup.tsx";  
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      toast.error((err as Error).message || "An error occurred");
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in successfully");
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      toast.error((err as Error).message || "An error occurred");
    }
  };

  const facebookLogin = async () => {
    try {
      await signOut(auth); // 🔹 Chiude eventuali sessioni attive
      const result = await signInWithPopup(auth, facebookProvider);
      toast.success("Logged in successfully");
      setTimeout(() => navigate('/'), 2000);
      console.log("User Info:", result.user);
    } catch (err) {
      console.error("Facebook Login Error:", err);
      toast.error((err as Error).message || "Facebook login failed");
    }
  };

  const gitLogin = async () => {
    try {
      await signInWithPopup(auth, gitProvider);
      toast.success("Logged in successfully");
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error(err);
      toast.error((err as Error).message || "An error occurred");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div>
        <div className="shadow-md p-4 flex justify-center">
          <img src={TheNewYorkTimes} className="w-52" alt="The New York Times Logo" />
        </div>

        <div className="flex justify-center bg-gray-100 py-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-gray-700 font-medium text-3xl text-center">
              Log in or create an account
            </h1>

            <div className="mt-6">
              <label className="block font-bold text-base">Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                className="w-full p-2 border border-black rounded mt-2" 
                placeholder="Enter your email"
              />

              <label className="block font-bold text-base">Password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                className="w-full p-2 border border-black rounded mt-2" 
                placeholder="Enter your password"
              />
            </div>

            <button 
              onClick={emailLogin} 
              className="bg-black text-white font-semibold w-full p-2 mt-4 rounded hover:bg-gray-800 transition"
            >
              Create Account
            </button>

            <h1 className="text-center my-4 text-gray-600">or</h1>

            <p className="text-center text-sm text-gray-500">
              By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.
            </p>

            <div className="mt-4 space-y-3">
              <button 
                onClick={googleLogin} 
                className="border border-black w-full p-2 flex items-center justify-center rounded"
              >
                <img src={google} className="w-5 h-5 mr-3" />
                <span className="font-bold">Continue with Google</span>
              </button>

              <button 
                onClick={facebookLogin} 
                className="border border-black w-full p-2 flex items-center justify-center rounded"
              >
                <img src={facebook} className="w-5 h-5 mr-3" />
                <span className="font-bold">Continue with Facebook</span>
              </button>

              <button 
                onClick={gitLogin} 
                className="border border-black w-full p-2 flex items-center justify-center rounded"
              >
                <img src={github} className="w-5 h-5 mr-3" />
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
