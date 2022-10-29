import React, { useEffect, useState } from "react";
/// import file movies css
import "../css/Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "9539b5ed1fmsh166ec60437e5d9ep127e4fjsnf0c44d725c91",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.d))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // console.log(movies);

  return (
    <div className="sectionDiv">
      <div className="inputDivAround">
        <input
          className="SearchInput"
          placeholder="type the of movie"
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </div>
      <div className="disgnMainDivMovies">
        {movies.length ? (
          movies
            .filter((movie) => {
              if (movie === "") {
                return movie;
              } else if (
                movie.l.toLowerCase().includes(inputText.toLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie) => {
              return (
                <div className="mainMovies" key={movie.id}>
                  <img src={movie.i.imageUrl} alt="meshiImg" />
                  <p className="nameOfMovie">{movie.l}</p>
                </div>
              );
            })
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
}

export default Movies;
