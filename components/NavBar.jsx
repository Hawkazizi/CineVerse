import React from "react";
import NavItem from "./NavItem";
const NavBar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 text-lg p-8">
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
