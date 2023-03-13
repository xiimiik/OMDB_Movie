import { GetServerSideProps } from "next/types";
import { useRouter } from "next/router";
import { Button } from "reactstrap";
import { getMovie } from "../../api";

export default function Movie({ movie }) {
  const router = useRouter();

  const {
    Title,
    Released,
    Poster,
    Plot,
    Actors,
    Metascore,
    Genre,
    imdbRating,
    Runtime,
    Director,
    Writer,
    Awards,
    Country,
    Type,
  } = movie;

  const genreArr = Genre.split(",");

  return (
    <div className="container-xl">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="my-3">{Title}</h1>
          <p className="fs-5">Released {Released}</p>
        </div>
        <Button onClick={() => router.back()} className="h-50">
          Go back
        </Button>
      </div>
      <div className="d-flex gap-5 mb-3 flex-column flex-md-row align-items-center align-items-md-start">
        <div className="d-flex flex-column align-items-center">
          <img src={Poster} alt="Movie poster" className="mb-2" />
          <ul className="d-flex gap-3">
            {genreArr.map((genre) => (
              <li className="border border-2 rounded-pill p-2 fs-5">{genre}</li>
            ))}
          </ul>
        </div>
        <div className="w-75">
          <p className="fs-5">{Plot}</p>
          <p className="fs-4">Type: {Type}</p>
          <p className="fs-4">Country: {Country}</p>
          <p className="fs-4">Actors: {Actors}</p>
          <p className="fs-4">Director: {Director}</p>
          <p className="fs-4">Writer: {Writer}</p>
          <p className="fs-4">Runtime: {Runtime}</p>
          <p className="fs-4">Awards: {Awards}</p>
          <div className="d-flex flex-column gap-2 justify-content-center">
            <div className="fs-4 d-flex align-items-center">
              <img
                src="../../static/cartoon-gold-star.svg"
                alt="star"
                style={{
                  height: "25px",
                }}
              />{" "}
              Metascore - {Metascore} / 100
            </div>
            <div className="fs-4 d-flex align-items-center">
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
