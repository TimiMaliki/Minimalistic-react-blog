import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitleBlog] = useState("");
  const [date, setDateBlog] = useState("");
  const [body, setBodyBlog] = useState("");
  const [id, setId] = useState("");
  const [blogImg, setFile] = useState("")

  const localStore = (post) => {
    const data  = localStorage.getItem("dataStord")
    if(!data || data.length === 0){
      let arr = []
      arr.push(post)
      localStorage.setItem("dataStord" , JSON.stringify(arr))
    }else{
      const parseData = JSON.parse(data)
     let myNewArr = parseData
      myNewArr.push(post)
      localStorage.setItem("dataStord" , JSON.stringify(myNewArr))
    }
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStore({title , date , body , blogImg , id})
  };
  


  const getFile = (e) => {
          setFile(URL.createObjectURL( e.target.files[0]))
  }
  return (
    <div className="w-full h-full p-20 text-center mt-2 grid">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="p-10 w-full">
          <label className="text-2xl lg:text-4xl">Create A Blog and Post For Free</label>
        </div>

        <div className="p-10 grid place-content-center w-full mb-8">
          <label className="text-4xl mb-2 text-start">Upload a  picture:</label>
          <input
            type="file"
            required
             onChange={getFile}
             className="w-[300px] h-full lg:w-[500px] lg:h-[105px] border border-black text-black rounded-lg shadow-lg p-2"
          />
          <img src={blogImg} alt="" style={{width:"100%"}}   className="w-full h-full  rounded-lg mt-4"/>
        </div>



        <div className="p-10 grid place-content-center w-full mb-8">
          <label className="text-4xl mb-2 text-start">Title:</label>
          <input
            type="text"
            placeholder=""
            required
            value={title}
            onChange={(e) => setTitleBlog(e.target.value)}
            className=" w-[300px] h-full lg:w-[500px] lg:h-[35px] border border-black text-black rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-10 grid place-content-center w-full mb-8">
          <label className="text-4xl mb-2 text-start">Date:</label>
          <input
            type="text"
            placeholder=""
            required
            value={date}
            onChange={(e) => setDateBlog(e.target.value)}
            className="w-[300px] h-full lg:w-[500px] lg:h-[35px] border  text-black border-black rounded-lg shadow-lg p-2"
          />
        </div>

        <div className="p-10  grid place-content-center w-full mb-8">
          <label className="text-4xl mb-2 text-start">Body:</label>
          <textarea
            className="w-[300px] h-full lg:w-[500px]  border border-black text-black rounded-lg shadow-lg p-10"
            required
            value={body}
            onChange={(e) => setBodyBlog(e.target.value)}
          ></textarea>
        </div>

        <div className="p-10  grid place-content-center w-full mb-8">
          <label className="text-4xl mb-2 text-start">Number of Blog:</label>
          <input
            className="w-full h-full lg:w-[500px] h-full border border-black text-black rounded-lg shadow-lg p-2"
            required
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <button className="w-[100px] h-[45px] bg-black text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
