import { ResponseError } from "../types/ResponseError";
import { MovieData, MoviesResponse } from "../types/MovieTypes";

const API_URL = "https://www.omdbapi.com/?apikey=ac26010c";

export async function getMovies(
  query: string
): Promise<MoviesResponse | ResponseError> {
  const response = await fetch(`${API_URL}&s=${query}`);
  const data = await response.json();

  if (data.Response === "True") {
    return {
      movies: data.Search,
      totalResults: data.totalResults,
      Response: data.Response
    };
  }

  return {
    Response: 'False',
    Error: data.Error,
  };
}

export async function getMovie(
  query: string
): Promise<MovieData | ResponseError> {
  const response = await fetch(`${API_URL}&i=${query}&plot=full`);
  const data = await response.json();

  console.log(data)

  if (data.Response === "True") {
    return data;
  }

  return {
    Response: 'False',
    Error: data.Error,
  };
}
