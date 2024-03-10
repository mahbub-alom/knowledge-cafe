import React from "react";
import profile from "../../assets/images/photo.jpg"

const Header = () => {
  return (
    <header className="flex justify-between p-4 m-4 border-b-2">
      <h1 className="text-5xl">Knowledge Cafe</h1>
      <img
        className="w-14 h-14 
            rounded-full"
        src={profile}
        alt=""
      />
    </header>
  );
};

export default Header;
