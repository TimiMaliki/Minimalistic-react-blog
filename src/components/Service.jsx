import React from "react";

const Service = () => {
  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full grid lg:grid-cols-2 gap-3 p-14">
        <div className="our-services">
          <h1 className="text-2xl  text-4xl text-center lg:text-7xl font-extrabold">
            Our Services
          </h1>
        </div>

        <div className="text">
          <p className="lg:text-xl text-base text-center">
            At H&F-Studio, we specialize in UX/UI Design, Webflow Development
            and Brand Identity creation, what is crucial for business success
            nowadays. If you will have all this 3 steps done you can sleep well
            while your website is converting potential customers into actual
            sales and we are here to help you achieve this!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-2 lg:p-12">
        {/* <div className="grid place-content-center"> */}

        <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20  border border-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">App Development</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2 lg:p-20   border border-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Ui/Ux Designs</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 mb-2  lg:p-20 border border-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Web Development</h2>
          </div>

          <div className="card-one  w-full  text-center p-10 lg:p-20  border border-black rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Daily News report</h2>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
