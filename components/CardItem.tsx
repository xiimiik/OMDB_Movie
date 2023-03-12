import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

interface Props {
  title: string;
  year: string;
  imgUrl: string;
}

export const CardItem: React.FC<Props> = ({ imgUrl, title, year }) => {
  const poster = imgUrl === 'N/A'
      ? 'https://via.placeholder.com/360x270.png?text=no%20preview'
      : imgUrl;

  return (
    <Card
      style={{
        width: "18rem",
      }}
      className="h-100 align-self-center"
    >
        <img alt="Movie poster" src={poster} className="object-fit-cover" style={{
        height: "350px",
      }}/>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {year}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};