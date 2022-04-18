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
           <div className="row-span-3">
             <h1 className="text-blue-600 text-center mt-5 text-3xl"> Our Services</h1>
             <div className="services-container">
               {services.map((service) => (
                 <Service key={service.id} service={service}></Service>
               ))}
             </div>
           </div>
         </div>
       );
};

export default Services;