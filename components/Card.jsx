"use client";
import React from "react";
import Link from "next/link";
import { BsHandThumbsUpFill } from "react-icons/bs";
const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="error Loading"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity"
          placeholder="blur"
          blurdataurl={"spinner.svg"}
        ></img>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="line-cramp-1 text-lg font-bold">
            {result.title || result.name}
          </h2>

          <p className="flex items-center">
            {result.release_date || result.first_air_date}{" "}
            <BsHandThumbsUpFill className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
