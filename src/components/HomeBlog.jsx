import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
import { HomeDisplayBlog } from "./HomeDisplayBlog";

const HomeBlog = () => {

  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full flex justify-between gap-8 p-2 lg:p-14">
        <div className="our-services">
            <h1 className="text-5xl  lg:text-7xl font-extrabold">Blog</h1>
        </div>

        <div className="text w-1/2 flex justify-end gap-10 mt-1">
        <p className="text-2xl mt-1 cursor-pointer">More </p>
        <div className="mt-2 text-2xl"><FaArrowRight style={{width:"100%"}}/></div>
        </div>
      </div>
      <HomeDisplayBlog  />
    </div>
  );
};

export default HomeBlog;
