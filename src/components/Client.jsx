import React from "react";
import dot from "../assets/client-logo-img/dot.svg";
import logo1 from "../assets/client-logo-img/logo1.svg";
import logo2 from "../assets/client-logo-img/logo2.svg";
import logo3 from "../assets/client-logo-img/logo3.svg";
import logo4 from "../assets/client-logo-img/logo4.svg";
import logo5 from "../assets/client-logo-img/logo5.svg";
import logo6 from "../assets/client-logo-img/logo6.svg";
import logo7 from "../assets/client-logo-img/logo7.svg";
import logo8 from "../assets/client-logo-img/logo8.svg";
import logo9 from "../assets/client-logo-img/logo9.svg";
import logo10 from "../assets/client-logo-img/logo10.svg";
import logo11 from "../assets/client-logo-img/logo11.svg";
import logo12 from "../assets/client-logo-img/logo12.svg";

const Client = () => {
  const imagiesFirstBatch = [logo1, logo2, logo3, logo4, logo5, logo6];

  const imagiesSecondBatch = [logo7, logo8, logo9, logo10, logo11, logo12];
  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full dot flex justify-start  gap-2 lg:gap-8 p-14">
        <img src={dot} alt="dot" />
        <p className="text-base lg:text-2xl w-full font-semibold">
          Our client portfolio reflects our versatility and commitment to
          excellence. Whether for innovative startups or established
          enterprises, our tailored digital strategies speak volumes, showcasing
          the artistry of professional web design.
        </p>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 p-14 lg:p-12">
          {imagiesFirstBatch.map((batch) => (
            <div className="flex justify-center">
                 <img src={batch} alt="" key={batch.id}/>
            </div>
          ))}
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 p-14 lg:p-12">
          {imagiesSecondBatch.map((batch) => (
            <div className="flex justify-center mb-2">
                 <img src={batch} alt="" key={batch}/>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Client;
