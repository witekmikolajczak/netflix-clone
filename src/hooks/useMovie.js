const api_key = "9eaaa2e6544e003ba31ef9f40b90b21b";

const gatherMovieData = (data) => {
  const items = data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    votes_average: movie.vote_average,
    vote_count: movie.vote_count,
    image: movie.backdrop_path,
  }));
  console.log(items);
};

export const useMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  )
    .then((resposne) => resposne.json())
    .then((data) => {
      //   console.log(data);
      return data;
    });
  return response;
  //   gatherMovieData(response.results);
};
