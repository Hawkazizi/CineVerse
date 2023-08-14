"use client";
import React from "react";
import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div className="">
      <Link href={address} className="my-4 hover:text-amber-600">
        <p className="m-2">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
