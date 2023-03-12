import { GetServerSideProps } from "next/types";
import { getMovie } from "../../api";

import { useRouter } from "next/router";
import { Button } from "reactstrap";

export default function Movie({ movie }) {
  const router = useRouter();

  const {
    Title,
    Year,
    Poster,
    type,
    Plot,
    Actors,
    Metascore,
    Genre,
    imdbRating,
  } = movie;

  const genreArr = Genre.split(",");

  return (
    <div className="container-xl">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-3">{Title}</h1>
        <Button onClick={() => router.back()} className="h-50">
          Go back
        </Button>
      </div>
      <div className="d-flex gap-5 mb-3 align-items-center">
        <div className="d-flex flex-column align-items-center">
          <img src={Poster} alt="Movie poster" className="mb-2" />
          <ul className="d-flex gap-3">
            {genreArr.map((genre) => (
              <li className="border border-2 rounded-pill p-2 fs-5">{genre}</li>
            ))}
          </ul>
        </div>
        <div className="w-50">
          <p className="fs-5">{Plot}</p>
          <div className="d-flex flex-column gap-2 justify-content-center">
            <div className="fs-4">
              <img
                src="../../static/cartoon-gold-star.svg"
                alt="star"
                style={{
                  height: "25px",
                }}
              />{" "}
              Metascore - {Metascore} / 100
            </div>
            <div className="fs-4">
              <img
                src="../../static/cartoon-gold-star.svg"
                alt="star"
                style={{
                  height: "25px",
                }}
              />{" "}
              imdbRating - {imdbRating} / 10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const movieId = query.movieId;

  if (typeof movieId === "string") {
    const data = await getMovie(movieId);

    if (data.Response === "True") {
      return {
        props: {
          movie: data,
        },
      };
    }
  }

  return {
    props: {
      movie: [],
    },
  };
};
