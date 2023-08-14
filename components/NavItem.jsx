"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItem = ({ title, param }) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          search &&
          search === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavItem;

//
