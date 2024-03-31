import React, { useState} from "react";
import DeleteItem from "../components/DeleteItem";
import { Link } from "react-router-dom";
import blogImgOne from "../assets/home-blog-img/home-blog-img1.webp";
import blogImgTwo from "../assets/home-blog-img/home-blog-img-2.webp";
import blogImgThree from "../assets/home-blog-img/home-blog-img-3.webp";

const BlogArticle = () => {

  const [articles, setArticles] = useState([
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
        <div className="blogArticles w-full h-full grid grid-cols-1 lg:grid-cols-3 p-20 mb-2 ">
          {articles.map((article) => (
            <div
              className="blogGrid grid place-content-center "
              key={article.id}
            >
              <div className="blogCard w-96 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:border-gray-700">
                <img
                  className="w-full h-full  rounded-lg"
                  src={article.blogImg}
                  alt="blog imagies"
                  // style={{ width: "100%" }}
                />
              </div>

              <Link to={`/blog/${article.id}`}>
                <p className="p-4 hover:text-yellow-700">{article.date}</p>
              </Link>

              <Link to={`/blog/${article.id}`}>
                <p className=" text-xl mb-8 text-black hover:text-yellow-700">
                  {article.title}
                </p>
              </Link>
              <DeleteItem handleDelete={() => handleDelete(homeBlog.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
