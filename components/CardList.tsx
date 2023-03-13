import { Movie } from "../types/MovieTypes";
import { CardItem } from "./CardItem";

type Props = {
  list: Movie[];
};

export const CardList: React.FC<Props> = ({ list }) => {
  return (
    <ul className="movies mb-5">
      {list.map(({ Title, Year, Poster, imdbID }, i: number) => (
        <li key={imdbID} className="d-flex justify-content-center">
          <CardItem title={Title} year={Year} imgUrl={Poster} imdbID={imdbID} />
        </li>
      ))}
    </ul>
  );
};
