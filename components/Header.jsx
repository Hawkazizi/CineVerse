import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between mx-2  items-center py-6">
        <div className="flex ">
          <MenuItem title="HOME" address="/" />
          <MenuItem title="About" address="/about" />
        </div>
        <div>
          <Link href="/">
            <h2 className="text-2xl mx-6">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
                IMDb
              </span>
              <span className="text-xl">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
