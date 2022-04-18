import React from 'react';
import img1 from '../../Assets/Images/blog/auth.jpg';
import img2 from '../../Assets/Images/blog/firebase.png';
const Blogs = () => {
   return (
     <>
       <h1 className="text-blue-600 text-center my-8 mb-0 text-3xl">
         {" "}
         Read the latest blogs
       </h1>
       <div class="flex justify-center mt-6">
         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
           <img
             class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
             src={img1}
             alt=""
           />
           <div class="p-6 flex flex-col justify-start">
             <h5 class="text-xl font-medium mb-2 text-blue-600">
               Authentication vs Authorization
             </h5>
             <p class="text-gray-700 text-base mb-4">
               Simply put, authentication is the process of verifying who
               someone is, whereas authorization is the process of verifying
               what specific applications, files, and data a user has access to.
               The situation is like that of an airline that needs to determine
               which people can come on board.
             </p>
             <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
           </div>
         </div>
       </div>
       <div class="flex justify-center mt-6">
         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
           <img
             class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
             src={img2}
             alt=""
           />
           <div class="p-6 flex flex-col justify-start">
             <h5 class="text-blue-600 text-xl font-medium mb-2">
               Why we use firebase?
             </h5>
             <p class="text-gray-700 text-base mb-4">
               Firebase Authentication provides backend services, easy-to-use
               SDKs, and ready-made UI libraries to authenticate users to your
               app. It supports authentication using passwords, phone numbers,
               popular federated identity providers like Google, Facebook and
               Twitter, and more.
             </p>
             <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
           </div>
         </div>
       </div>
       <div class="flex justify-center mt-6">
         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
           <img
             class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
             src={img2}
             alt=""
           />
           <div class="p-6 flex flex-col justify-start">
             <h5 class="text-blue-600 text-xl font-medium mb-2">
               Alternatives of firebase authentication
             </h5>
             <p class="text-gray-700 text-base mb-4">
               Auth0. A set of unified APIs and tools that instantly enables
               Single Sign On and user management to all your applications.
               MongoDB. MongoDB stores data in JSON-like documents that can vary
               in structure, offering. ... Passport. ... Okta. ... Firebase. ...
               JSON Web Token. ... Amazon Cognito. ... Keycloak.
             </p>
             <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
           </div>
         </div>
       </div>
       <div class="flex justify-center mt-6">
         <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
           <img
             class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
             src={img2}
             alt=""
           />
           <div class="p-6 flex flex-col justify-start">
             <h5 class="text-blue-600 text-xl font-medium mb-2">
               Firebase other services
             </h5>
             <p class="text-gray-700 text-base mb-4">
               The Firebase Realtime Database is a cloud-hosted NoSQL database
               that lets you store and sync data between your users in realtime.
             </p>
             <p class="text-gray-700 text-base mb-4">
               Add machine learning capabilities to your app Use Firebase ML to
               train and deploy custom models, or use a more turn-key solution
               with the Cloud Vision APIs.
             </p>
             <p class="text-gray-700 text-base mb-4">
               Develop a backend without servers Create functions that are
               triggered by Firebase products, such as changes to data in the
               Realtime Database, new user sign-ups via Auth, and conversion
               events in Analytics. Are you a Google Cloud developer?
             </p>
             <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
           </div>
         </div>
       </div>
     </>
   );
};

export default Blogs;