import React from "react";
import propTypes from "prop-types";
import "./movie.css";
const Movie = ({ id, year, title, summary, poster, genre }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <ul className="movie_genres">
          {genre.map((item, idx) => (
            <li key={idx} className="genres_genre">
              {item}
            </li>
          ))}
        </ul>
        <h5 className="movie_year">{year}</h5>
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
  genre: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
