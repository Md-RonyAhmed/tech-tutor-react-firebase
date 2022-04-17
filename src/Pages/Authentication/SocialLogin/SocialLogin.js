import React from 'react';
import google from '../../../Assets/Images/social icon/google.png';
import github from '../../../Assets/Images/social icon/github.png';
const SocialLogin = () => {
   return (
     <div>
       <div className="flex items-center justify-center mt-2">
         <div style={{ height: "1px" }} className="bg-black w-48"></div>
         <p className="px-2">Or</p>
         <div style={{ height: "1px" }} className="bg-black w-48"></div>
       </div>
       <div>
         <button className="shadow-md rounded-md w-full flex mx-auto my-4 py-2 px-2 items-center justify-center hover:bg-slate-100 hover:shadow-inner">
           <img
             className="mr-2"
             style={{ width: "30px" }}
             src={google}
             alt=""
           />
           <span className="text-xl text-amber-500">Sign In with Google</span>
         </button>
         <button className="shadow-md rounded-md w-full flex mx-auto my-4 py-2 px-2 items-center justify-center hover:bg-slate-100 hover:shadow-inner">
           <img
             className="mr-2"
             style={{ width: "30px" }}
             src={github}
             alt=""
           />
           <span className="text-xl text-amber-500">Sign In with GitHub</span>
         </button>
       </div>
     </div>
   );
};

export default SocialLogin;