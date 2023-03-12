import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { Input, Form } from "reactstrap";
import { getMovies } from "../../api";
import { CardItem } from "../../components/CardItem";
import { Movie } from "../../types/MovieTypes";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  movies: Movie[];
}

export default function Film({ movies = [] }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery("");
    router.push(`/search/${searchQuery}`);
  };

  return (
    <div className="d-flex flex-column container-xl">
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search!"
          className="my-5 w-50 mx-auto"
          bsSize="lg"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Form>

      <ul className="movies">
        {movies.map(({ Title, Year, Poster, imdbID }, i: number) => (
          <li key={i} className="d-flex justify-content-center">
            <Link href={`/movies/${imdbID}`}>
              <CardItem title={Title} year={Year} imgUrl={Poster} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.query;

  if (typeof searchQuery === "string") {
    const data = await getMovies(searchQuery);

    if (data.Response === "True") {
      return {
        props: {
          movies: data.movies,
        },
      };
    }
  }

  return {
    props: {
      movies: [],
    },
  };
};
