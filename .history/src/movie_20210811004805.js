import React from "react";
import propTypes from "prop-types";
import "./movie.css";
const Movie = ({ id, year, title, summary, poster }) => {
  return (
    <div className="movies_movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
};

export default Movie;