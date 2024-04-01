import React, {useEffect, useState} from "react";
import { BlogData } from "../BlogData.jsx/BlogData";
import { useParams } from "react-router";


const Index = () => {
  const params = useParams()


  const [currentBlog , setCurrentBlog] = useState({})


  const getBlog = (id) => {
       const currentBlog = BlogData.find((blog) => {
        console.log(blog.id)
        return blog.id === Number(id)
       })

       setCurrentBlog(currentBlog)
  }

   React.useEffect(() => {
          getBlog(params.id)
   }, [])

  return (
    <div className="w-full h-full mt-8 ">
      <div className="p-20">
        <div className="w-full h-full flex justify-center mb-10">
          <img src={currentBlog.blogImg} alt="" />
        </div>
        <div className="text-center w-full h-full">
          <h1 className="mb-4 text-2xl lg:text-5xl font-bold">
            {currentBlog.title}
          </h1>
          <p className="mb-4 text-base text-center lg:text-2xl">
            {currentBlog.date}
          </p>
          <p className="mb-4 text-base text-center lg:text-2xl">
            {currentBlog.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
