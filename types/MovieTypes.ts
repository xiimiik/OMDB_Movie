export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbId: string;
  type: string;
}

export interface MoviesResponse {
  movies: Movie[],
  totalResults: string,
  Response: string
}
