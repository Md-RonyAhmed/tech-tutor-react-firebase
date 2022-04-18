import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
       const [services, setServices] = useState([]);

       useEffect(() => {
         fetch("services.json")
           .then((res) => res.json())
           .then((data) => setServices(data));
       }, []);

       return (
         <div id="services" className="container">
           <div>
             <h1 className="text-blue-600 text-center my-8 mb-0 text-3xl">
               {" "}
               Choose Best Services
             </h1>
             <div class="md:flex justify-center mx-auto block">
               {services.map((service) => (
                 <Service key={service.id} service={service}></Service>
               ))}
             </div>
           </div>
         </div>
       );
};

export default Services;