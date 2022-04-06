import { useEffect, useState } from "react";

const api_key = "9eaaa2e6544e003ba31ef9f40b90b21b";

// const gatherMovieData = (data) => {
//   const items = data.map((movie) => ({
//     id: movie.id,
//     title: movie.title,
//     description: movie.description,
//     votes_average: movie.vote_average,
//     vote_count: movie.vote_count,
//     image: movie.backdrop_path,
//   }));
//   console.log(items);
// };

export const useMovie = async () => {
  // const [movie, setMovie] = useState();
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  ).then((response) => response.json());
  // console.log(response);
  // const data = await response.json();
  // setMovie(data);
  // console.log(movie);
  return movie;
};
