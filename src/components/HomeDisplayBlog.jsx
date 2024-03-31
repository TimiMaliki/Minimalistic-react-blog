import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteItem from "../components/DeleteItem";
import blogImgOne from "../assets/home-blog-img/home-blog-img1.webp";
import blogImgTwo from "../assets/home-blog-img/home-blog-img-2.webp";
import blogImgThree from "../assets/home-blog-img/home-blog-img-3.webp";

export const HomeDisplayBlog = () => {
  const [homeBlog, setHomeBlog] = useState([
    {
      blogImg: blogImgOne,
      date: "March 21 , 2024/Branding",
      title: "Brand Audits: Why They Are Essential and How to Conduct One",
      id: 1,
    },
    {
      blogImg: blogImgTwo,
      date: "March 21 , 2024/Branding",
      title: "The Role of Customer Experience in Branding",
      id: 2,
    },
    {
      blogImg: blogImgThree,
      date: "March 21 , 2024/Business",
      title:
        "Unlock the Power of Data: Your Ultimate Guide to Choosing the Right Information for Your Website",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const del = homeBlog.filter((item) => {
     return item.id !== id;
    });
    setHomeBlog(del);
  };

  return (
    <div>
      {homeBlog && (
        <div className="w-full h-full grid grid-cols-1  place-content-center grid-cols-1 lg:grid-cols-3  mb-2 ">
          {homeBlog.map((homeBlog) => (
            <div
              className="blogGrid grid  place-content-center  p-20 lg:p-20"
              key={homeBlog.id}
            >
              <div className="blogCard w-full  bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700">
                <img
                  className="w-full h-full  rounded-lg"
                  src={homeBlog.blogImg}
                  alt="blog imagies"
                  // style={{ width: "100%" }}
                />
              </div>

              <Link to={"blog"}>
                <p className="mt-4 mb-8">{homeBlog.date}</p>
              </Link>

              <Link to={"blog"}>
                <p className=" text-xl w-full mb-8">{homeBlog.title}</p>
              </Link>
              <DeleteItem handleDelete={() => handleDelete(homeBlog.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
