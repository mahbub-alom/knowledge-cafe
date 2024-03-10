import React from "react";

const Bookmark = ({book}) => {
  const { title } = book;
  return (
    <div>
      <h2  className="bg-slate-600 text-white rounded-lg p-5 m-3">{title}</h2>
    </div>
  );
};

export default Bookmark;
