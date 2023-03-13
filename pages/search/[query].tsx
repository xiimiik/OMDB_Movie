import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { Input, Form } from "reactstrap";
import { getMovies } from "../../api";
import { Movie } from "../../types/MovieTypes";
import { useRouter } from "next/router";
import { CardList } from "../../components/CardList";
import { PaginationTemplate } from "../../components/PaginationTemplate";

interface Props {
  movies: Movie[];
  totalResults: number;
}

export default function Film({ movies = [], totalResults }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery("");
    router.push(`/search/${searchQuery}?page=${currentPage}`);
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

      {movies.length > 0 ? (
        <>
          <CardList list={movies} />
          <PaginationTemplate total={totalResults} />
        </>
      ) : (
        <h1 className="text-center">{`No results found, try again :(`}</h1>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { query: searchQuery, page } = query;

  if (typeof searchQuery === "string") {
    const data = await getMovies(searchQuery, +page);

    if (data.Response === "True") {
      return {
        props: {
          movies: data.movies,
          totalResults: +data.totalResults,
        },
      };
    }
  }

  return {
    props: {
      movies: [],
      totalResults: 0,
    },
  };
};
