import React from "react";

export default function About() {
  return (
    <div className="bg-gray-400 p-2">
      <div>
        <p className="text-2xl font-bold px-12">
          <span>Made</span> <span className="text-white">By</span>{" "}
        </p>
        <p className="text-7xl rounded-xl font-extrabold text-center"><span className="text-black bg-white rounded-l-md p-2">Joy</span>
        <span className="text-white bg-black rounded-r-md p-2">Boy</span></p>
      </div>
      <div className="py-20 px-4 max-w-6xl mx-auto rounded-lg border-4 border-white my-12 bg-black text-white">
        <h1 className="text-3xl font-bold mb-4 text-slate-200">
          About Rusty Estate
        </h1>
        <p className="mb-4">
          Rusty Estate is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className="mb-4">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>
      </div>
    </div>
  );
}
