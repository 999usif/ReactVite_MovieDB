import { MovieModel } from "../models/Movie";
const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (): Promise<MovieModel[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log("queried TMDB")
  return data.results;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
