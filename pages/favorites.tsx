import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Button } from "reactstrap";
import { getMovie } from "../api";
import { CardList } from "../components/CardList";

export default function Favorites({ movies }) {
  const router = useRouter();

  return (
    <div className="container-xl">
      <div className="d-flex justify-content-between align-items-center mx-3">
        <h1 className="my-3">Favorites</h1>
        <Button onClick={() => router.back()} className="h-50">
          Go back
        </Button>
      </div>
      <CardList list={movies} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const favoritesIds = req.cookies.Favorite
    ? JSON.parse(req.cookies.Favorite)
    : [];
  const movies = [];

  for (const id of favoritesIds) {
    const data = await getMovie(id);

    if (data.Response === "True") {
      movies.push(data);
    }
  }

  return {
    props: {
      movies,
    },
  };
};
