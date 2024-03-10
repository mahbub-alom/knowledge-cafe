import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog"

const Blogs = ({handleAddBook,handleAddReadingTime}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h1>blog : {blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddBook={handleAddBook} handleAddReadingTime={handleAddReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;