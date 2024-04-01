import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import BlogArticle from "../page/BlogArticle.jsx";
import App from "../components/App.jsx";
import Index from "../BlogArticlesStories.jsx/Index.jsx";



const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path="/blog" element={<BlogArticle/>}/>
        <Route path="/blog/:id" element={<Index/>} />
      </Route>
    </Routes>
  );
};

export default Router;
