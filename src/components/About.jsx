import React from "react";

const About = () => {
  return (
    <section className="w-full h-full  grid lg:grid-cols-3 lg:p-12">
      <div className="card-one w-full h-full  text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold mt-2 p-8">
          Creating Blog for Leading Industries
        </h1>
      </div>

      <div className="card-one w-full h-full  text-center">
        <h1 className="text-2xl font-extrabold p-2">Meet Maliki-Studio</h1>
      </div>

      <div className="card-one w-full h-full  text-center">
        <p className="text-xl   p-10">
          At Maliki-Studio, we're dedicated to unlocking your brand's full
          potential through cutting-edge digital solutions. <br /> <br /> Our expertise spans
          UX/UI Design, Branding, and E-commerce, focusing on creating impactful
          digital experiences within Healthcare, SaaS, FinTech, Real Estate,
          E-commerce, and AI industries. <br /> <br /> We prioritize working within your
          budget, strategically planning and rationalizing expenditures to
          deliver a cost-effective digital strategy. Our goal is to provide you
          with a profitable product strategy and an efficient execution plan,
          maximizing your investment's return. Partner with us to make your
          brand a beacon in its industry, thriving in the dynamic online
          landscape.
        </p>
      </div>
    </section>
  );
};

export default About;
