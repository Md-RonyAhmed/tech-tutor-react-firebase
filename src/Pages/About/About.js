import React from 'react';
import profile from '../../Assets/Images/profile/MdRony.jpg';
const About = () => {
   return (
     <div>
       <h1 className="text-blue-600 text-center my-8 mb-0 text-4xl">
         About Me
       </h1>
       <div className="container p-8">
         <div>
           <img className="rounded mx-auto mb-5" src={profile} alt="" />
         </div>
         <div>
           <h1 className="text-2xl text-black">My Goal</h1>
           <p className="text-sm text-justify">
             My next goal is became a well established MERN stack developer. And
             I also learn AI and Python and Django as a backend.Hi there 👋,
             This is Md. Rony JavaScript || React || Node || Python I'm a
             self-motivated, honest, and hard-working person. I have some skills
             like C, C++, Python, MySQL, JavaScript, HTML, CSS, React, Redux,
             PHP, Artificial Intelligence, Machine learning, Neural networks,
             Computer vision, Image processing, and Graphics design.
           </p>
           <p className="text-sm text-justify">
             {" "}
             So, I want to be a Full-stack web developer. My strong point is
             working long hours without losing patience. My weakness is whenever
             I get any task to do, I give so much time with it until it was
             finished and it kills some time. I participated in many programming
             contests on online and offline platforms Skills: JavaScript/ React/
             MongoDB/ HTML/ CSS/ Python/ Django/ Node/ Express/ Machine
             Learning/ Deep Learning/ Computer Vision / Image Processing
           </p>
         </div>
       </div>
     </div>
   );
};

export default About;