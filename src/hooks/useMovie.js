const api_key = "9eaaa2e6544e003ba31ef9f40b90b21b";

export const useMovie = async () => {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`
  ).then((response) => response.json());
  return movie;
};
