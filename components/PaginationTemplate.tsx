import { useRouter } from "next/router";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { getNumbers } from "../utils";

type Props = {
  total: number;
};

export const PaginationTemplate: React.FC<Props> = ({ total }) => {
  const router = useRouter();
  let currentPage = +router.query.page;
  const perPage = 10;
  const pageCount = Math.ceil(total / perPage);
  const maxPageLinks = 5;
  const pageOffset = Math.floor(maxPageLinks / 2);
  const pageStart = Math.max(1, currentPage - pageOffset);
  const pageEnd = Math.min(pageCount, pageStart + maxPageLinks - 1);
  const pageNumbers = getNumbers(pageStart, pageEnd);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const changeToPrevPage = () => {
    router.push(`/search/${router.query.query}?page=${currentPage - 1}`);
  };

  const changeToNextPage = () => {
    router.push(`/search/${router.query.query}?page=${currentPage + 1}`);
  };

  const handle = (num: number) => {
    router.push(`/search/${router.query.query}?page=${num}`);
  };

  return (
    <Pagination
      aria-label="Page navigation example"
      size="lg"
      className="d-flex justify-content-center"
    >
      <PaginationItem disabled={isFirstPage} onClick={changeToPrevPage}>
        <PaginationLink previous />
      </PaginationItem>
      {pageNumbers.map((num) => (
        <PaginationItem key={num} active={num === currentPage}>
          <PaginationLink onClick={() => handle(num)}>{num}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={isLastPage} onClick={changeToNextPage}>
        <PaginationLink next />
      </PaginationItem>
    </Pagination>
  );
};
