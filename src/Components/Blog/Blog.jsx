import React from "react";
import {FaBookmark} from "react-icons/fa"

const Blog = ({ blog ,handleAddBook,handleAddReadingTime}) => {
  const {
    title,
    id,
    hashtags,
    reading_time,
    posted_date,
    author_name,
    author_image,
    cover_image,
  } = blog;
  return (
    <div className="mb-10 space-y-4">
      <img
        className="w-2/3"
        src={cover_image}
        alt={`Cover image of ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-14 h-14 
            rounded-full" src={author_image} alt="" />
            <div>
                <h2 className="text-2xl">{author_name}</h2>
                <p>{posted_date}</p>
            </div>
        </div>
        <div>
          <span>
            {reading_time} min read
          </span>
          <button onClick={()=>handleAddBook(blog)} className="ml-2 text-2xl text-red-600"><FaBookmark /></button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      <p>
        {
            hashtags.map((hash, idx)=> <a className="m-1" key={idx} href="">#{hash}</a>)
        }
      </p>
      <button className="font-bold text-purple-600 underline" onClick={()=>handleAddReadingTime(id,reading_time)}>Mark As Read</button>
    </div>
  );
};

export default Blog;
