import React from 'react';

const Service = ({ service }) => {
   const { id, title, img, description, price, courses } = service;
   return (
     <div class="rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-6">
       <img class="rounded-t-lg" src={img} alt="" />
       <div class="p-6">
         <h5 class="text-gray-900 text-xl font-medium mb-2">Name: {title}</h5>
         <p class="text-gray-700 text-base mb-4">Price: {price}</p>
         <p class="text-gray-700 text-base mb-4">Courses: {courses}</p>
         <p class="text-gray-700 text-sm mb-4">{description}</p>
         <button
           type="button"
           class="block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
         >
           Book: {title}
         </button>
       </div>
     </div>
     //   <div className="container">
     //     <img className="w-full" src={img} alt="" />
     //     <h2>{title}</h2>
     //       <p>Price: {price}</p>
     //       <p>Courses: {courses}</p>
     //     <p>
     //       <small>{description}</small>
     //     </p>
     //     <button
     //       className="btn btn-primary"
     //     >
     //       Book: {title}
     //     </button>
     //   </div>
   );
};

export default Service;