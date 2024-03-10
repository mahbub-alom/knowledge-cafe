import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookMarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddBook =(blog)=>{
    const newBookMarks=[...bookmarks,blog];
    setBookMarks(newBookMarks);
  }

  const handleAddReadingTime=(id,time)=>{
    const newTime=readingTime+time;
    setReadingTime(newTime);
    const remainingBookMarks=bookmarks.filter(book=>book.id!==id);
    setBookMarks(remainingBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddReadingTime={handleAddReadingTime} handleAddBook={handleAddBook}></Blogs>
        <Bookmarks readingTime={readingTime} book={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
