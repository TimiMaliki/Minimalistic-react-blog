import React, { useEffect, useState} from "react";
import DeleteItem from "../components/DeleteItem";
import { Link } from "react-router-dom";
import { BlogData } from "../BlogData.jsx/BlogData";

const BlogArticle = () => {

  const [articles, setArticles] = useState(BlogData);


  const handleDelete = (id) => {
    const del = articles.filter((item) => {
     return item.id !== id;
    });
    setArticles(del);
  };
 
  return (
    <div className="w-full h-full mt-2">
      <div className="article-component w-full h-full  p-12 lg:p-20">
        <div>
          <h2 className="text-black  text-center  lg:text-start text-2xl lg:text-5xl font-bold hover:text-yellow-700">
            Article
          </h2>
        </div>
        <div></div>
      </div>

      {articles && (
        <div className="w-full h-full grid grid-cols-1  place-content-center grid-cols-1 lg:grid-cols-3  mb-2 ">
          {articles.map((article) => (
            <div
              className="blogGrid grid  place-content-center  p-20 lg:p-20 "
              key={article.id}
            >
              <div className="blogCard w-full  bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700">
                <img
                  className="w-full h-full  rounded-lg"
                  src={article.blogImg}
                  alt="blog imagies"
                  // style={{ width: "100%" }}
                />
              </div>

              <Link to={`${article.id}`}>
                <p className="p-4 hover:text-yellow-700 ">{article.date}</p>
              </Link>

              <Link to={`${article.id}`}>
                <p className=" text-xl mb-8 text-black hover:text-yellow-700 ">
                  {article.title}
                </p>
              </Link>
              <div className="mb-4"><DeleteItem handleDelete={() => handleDelete(article.id)} /></div>
           
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
