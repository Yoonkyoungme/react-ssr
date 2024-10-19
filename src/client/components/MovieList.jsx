import React from "react";

import { TMDB_THUMBNAIL_URL } from "../constants";

import starEmptyImage from "@images/star_empty.png";

export default function MovieList({ movies }) {
  return (
    <>
      {movies && (
        <ul className="thumbnail-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function MovieItem({ movie }) {
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="item">
      <img
        className="thumbnail"
        src={`${TMDB_THUMBNAIL_URL}/${poster_path}`}
        alt={title}
      />
      <div className="item-desc">
        <p className="rate">
          <img className="star" src={starEmptyImage} />
          <span>{vote_average.toFixed(1)}</span>
        </p>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
