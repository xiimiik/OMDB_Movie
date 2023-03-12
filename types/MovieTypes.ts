export interface Rating {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  type: string;
}

export interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
  Plot: string;
  Actors: string;
  Ratings: Rating[];
  Genre: string;
  Response: string;
}

export interface MoviesResponse {
  movies: Movie[];
  totalResults: string;
  Response: string;
}
