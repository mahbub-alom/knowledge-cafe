import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ book ,readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-400 rounded-lg p-4">
        <h2 className="text-2xl text-center border-4">Reading Time : {readingTime}</h2>
      <h2 className="text-2xl text-center">bookmark :{book.length}</h2>
   
        {book.map((cart,idx) => (
          <Bookmark key={idx} book={cart}></Bookmark>
        ))}
      
    </div>
  );
};

export default Bookmarks;
