import React from 'react';

const Service = ({ service }) => {
   const { id, title, img, description, price, courses } = service;
   return (
     <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-6">
       <img className="rounded-t-lg" src={img} alt="" />
       <div className="p-6">
         <h5 className="text-gray-900 text-xl font-medium mb-2">Name: {title}</h5>
         <p className="text-gray-700 text-base mb-4">Price: {price}</p>
         <p className="text-gray-700 text-base mb-4">Courses: {courses}</p>
         <p className="text-gray-700 text-sm mb-4">{description}</p>
         <button
           type="button"
           className="block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
         >
           Book: {title}
         </button>
       </div>
     </div>
   );
};

export default Service;