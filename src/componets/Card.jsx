import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=84540058b18ec26438d2c9a10b22e275&language=en-US&page=1";

const Card = ({movies}) => {

  return (
    <div className="cards mt-10 ml-14 mr-14 mb-7">
      <div className="grid grid-cols-4 gap-7">
        {
          movies.map((movie) => (
            <div className="col-span-1">
          <div className="card">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-ellipsis overflow-hidden whitespace-nowrap">
                  {movie.original_title}
                  </h5>
                </a>
                {/* Start */}
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;
