import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email address");
    }
  };
   return (
     <div className="my-16">
       <h1 className="text-blue-600 text-center text-4xl my-5">
         Please Log In
       </h1>
       <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
         <form onSubmit={handleSubmit}>
           <div className="form-group mb-6">
             <label
               htmlFor="exampleInputEmail2"
               className="form-label inline-block mb-2 text-gray-700"
             >
               Email address
             </label>
             <input
               type="email"
               className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               id="exampleInputEmail2"
               aria-describedby="emailHelp"
               placeholder="Enter email"
             />
           </div>
           <div className="form-group mb-6">
             <label
               htmlFor="exampleInputPassword2"
               className="form-label inline-block mb-2 text-gray-700"
             >
               Password
             </label>
             <input
               type="password"
               className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
               id="exampleInputPassword2"
               placeholder="Password"
             />
           </div>
           <div className="flex justify-between items-center mb-6">
             <div className="form-group form-check">
               <input
                 type="checkbox"
                 className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                 id="exampleCheck2"
               />
               <label
                 className="form-check-label inline-block text-gray-800"
                 htmlFor="exampleCheck2"
               >
                 Remember me
               </label>
             </div>
             <a
               href="#!"
               className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
             >
               Forgot password?
             </a>
           </div>
           <button
             type="submit"
             className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
           >
             Log In
           </button>
           <p className="text-gray-800 mt-6 text-center">
             Not a member?{" "}
             <Link
               to="/signup"
               className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
             >
               Register
             </Link>
           </p>
         </form>
         <SocialLogin></SocialLogin>
       </div>
     </div>
   );
};

export default SignIn;