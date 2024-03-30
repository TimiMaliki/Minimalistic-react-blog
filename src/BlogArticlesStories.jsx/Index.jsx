import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Index = () => {
    const routeParams = useParams()

    const [currentBlog,setCurrentBlog] =useState({})

    const retrievedData = (id) =>{
      const  data = localStorage.getItem("dataStord")
      const parse = JSON.parse(data)
       return parse.id === Number(id)
    }
  

    useEffect(() => {
      const data = retrievedData(routeParams.id)
      setCurrentBlog(data)
   }, []);
  
    // const getBlog=(id)=>{
    //  const currentBlog= retrievedData.find((read)=>{
    //   // console.log({read,id})
    //   return read.id === Number(id)
    //  })
    // //  console.log({currentBlog})
    //  setCurrentBlog(currentBlog)
    // }
  
    // React.useEffect(()=>{
    //  retrievedData(routeParams.id)
    //   setCurrentBlog(data)
    // },[])

  
 

    
  return (
    <div className="w-full h-full mt-8 ">
        <div className="p-20">

<div className='w-full h-full flex justify-center mb-10'>
<img src={currentBlog.blogImg} alt="" srcset="" />
</div>

    <div className='text-center w-full h-full'>
    <h1 className='mb-4 text-2xl lg:text-5xl font-bold'>{currentBlog.title}</h1>
    <p className='mb-4 text-base text-center lg:text-2xl'>{currentBlog.date}</p>
    <p className='mb-4 text-base text-center lg:text-2xl'>{currentBlog.body}</p>
    </div>
</div>
    </div>
  )
}

export default Index