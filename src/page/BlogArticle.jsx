import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogArticle = () => {

  const [articles, setArticles] = useState();

  const retrievedData = () =>{
    const  data = localStorage.getItem("dataStord")
    const parse = JSON.parse(data)
     return parse
  }

  useEffect(() => {
    const data = retrievedData()
    setArticles(data)
 }, []);


  // const [isLoading, setIsLoading] = useState(true);
  // const [error , setError] = useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/db")
  //     .then((res) => {
  //       if(!res.ok){
  //         throw Error('could not fetch data')
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setArticles(data);
  //       setIsLoading(false);
  //       setError(null)
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //        setError(error.message)
  //     })
  //   }, 1000);
  // }, []);

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
           {/* { error && <div className="text-center text-3xl">{error}</div>}
           {isLoading && <div className="text-center text-3xl">Loading...</div>} */}
      {articles && (
        <div className="blogArticles w-full h-full grid grid-cols-1 lg:grid-cols-2 p-20 mb-2 ">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
