import React, { useEffect, useState } from 'react'
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import github from "../images/github.png"
import TheNewYorkTimes from "../images/TheNewYorkTimes.png"
import backarrow from '../images/backarrow.png'
import { createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, getRedirectResult} from 'firebase/auth'
import { auth, facebookProvider, gitProvider, googleProvider } from "../firebase/setup.tsx";  
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, Link } from 'react-router-dom'

const navigate = useNavigate();

useEffect(() => {
  const checkRedirect = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        toast.success(`Logged in with ${result.providerId}`);
        navigate("/");
      }
    } catch (err: any) {
      console.error("Errore nel redirect:", err);
      toast.error(err.message || "An error occurred");
    }
  };

  checkRedirect();
}, []);

const Login = () => {

  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailLogin = async() =>{
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      toast.success("LoggedIn successfully")
      setTimeout(()=>{
        navigate('/')
      },2000)
    }catch(err){
      console.error(err)
      toast.error((err as Error).message || "An error occurred");
  }
  }

  const googleLogin = async() => {
    try{
      await signInWithPopup(auth,googleProvider)
      toast.success("LoggedIn successfully")
      setTimeout(()=>{
        navigate('/')
      },2000)
    }catch(err){
      console.error(err)
      toast.error((err as Error).message || "An error occurred");
    } 
  }

  const facebookLogin = async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      await auth.signOut();
      await auth.signOut();
      await signInWithRedirect(auth, facebookProvider);
    } catch (err: any) {
      console.error("Errore:", err);
      toast.error(err.message || "An error occurred");
    }
  };

  const gitLogin = async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      await auth.signOut();
      await auth.signOut();
      await signInWithRedirect(auth, gitProvider);
    } catch (err: any) {
      console.error("Errore:", err);
      toast.error(err.message || "An error occurred");
    }
  };
  
  return (
    <>
      <ToastContainer autoClose={3000}/>
      <div>
      <div className="shadow-md p-4 flex justify-center">
        <img src={TheNewYorkTimes} className="w-52" alt="The New York Times Logo" />
      </div>

      <Link to="/">
        <div className='flex items-center justify-start bg-gray-100'>
          <div className='ml-[33%] mt-4 flex items-center'>
           <img src={backarrow} className='w-5 h-5 cursor-pointer' />
           <h1 className="rounded-md cursor-pointer transition-colors font-bold">Torna alla home</h1>
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
          <input onChange={(e)=> setEmail(e.target.value)}type="email" className="w-full p-2 border border-black rounded mt-2" placeholder="Enter your email"/>
        
          <label className="block font-bold text-base">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)}type="password" className="w-full p-2 border border-black rounded mt-2" placeholder="Enter your email"/>
        
        </div>

        <button onClick={emailLogin}className="bg-black text-white font-semibold w-full p-2 mt-4 rounded hover:bg-gray-800 transition">
          Create Account
        </button>

        <h1 className="text-center my-4 text-gray-600">or</h1>

        <p className="text-center text-sm text-gray-500">
          By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.
        </p>

        <div onClick={googleLogin}className="mt-4 space-y-3 ">
          <button className="border border-black w-full p-2 flex items-center justify-center rounded">
            <img src={google} className="w-5 h-5 mr-3" />
            <span className="font-bold">Continue with Google</span>
          </button>

          <button onClick={facebookLogin}className="border border-black w-full p-2 flex items-center justify-center rounded">
            <img src={facebook} className="w-5 h-5 mr-3" />
            <span className="font-bold">Continue with Facebook</span>
          </button>

          <button onClick={gitLogin}className="border border-black w-full p-2 flex items-center justify-center rounded">
            <img src={github} className="w-5 h-5 mr-3" />
            <span className="font-bold">Continue with GitHub</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
    
    
  )
}

export default Login
