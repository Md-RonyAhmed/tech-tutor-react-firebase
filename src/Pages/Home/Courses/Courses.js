import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
     fetch("courses.json")
       .then((res) => res.json())
       .then((data) => setCourses(data));
   }, []);

   return (
     <div id="courses" className="container">
       <div>
         <h1 className="text-blue-600 text-center my-8 mb-0 text-3xl">
           {" "}
           Choose Best Courses
         </h1>
         <div className="md:flex justify-center mx-auto block">
           {courses.map((course) => (
             <Course key={course.id} course={course}></Course>
           ))}
         </div>
       </div>
     </div>
   );
};

export default Courses;