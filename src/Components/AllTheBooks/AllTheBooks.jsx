import SingleBook from "../SingleBook/SingleBook";
import { Row, Col, Container } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { useState } from "react";

export default function AllTheBooks(props) {
  const { books } = props;

  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <Row>
        <Col md={9}>
          {books.map((el) => (
            <SingleBook
              key={el.asin}
              title={el.title}
              img={el.img}
              elementId={el.asin}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Col>

        <Col md={3}>
          <CommentArea elementId={selected} />
        </Col>
      </Row>
    </Container>
  );
}
