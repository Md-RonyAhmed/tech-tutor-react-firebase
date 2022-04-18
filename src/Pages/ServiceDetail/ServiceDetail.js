import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to detail: {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="block w-52 mx-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
