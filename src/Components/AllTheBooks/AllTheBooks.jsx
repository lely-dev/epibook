import SingleBook from "../SingleBook/SingleBook";
import { Row, Col, Container } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { useState, useContext } from "react";
import { DarkMode } from "../../Context/DarkModeProvider";

export default function AllTheBooks(props) {
  const { books } = props;

  const [selected, setSelected] = useState(false);

  const { theme } = useContext(DarkMode);

  return (
    <Container fluid bg={theme} variant={theme}>
      <Row>
        <Col md={9} className="d-flex flex-wrap">
          {books.map((el) => (
            <SingleBook
              key={el.asin}
              title={el.title}
              img={el.img}
              elementId={el.asin}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
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
