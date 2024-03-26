import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./Components/Mynav/Mynav";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks";
import MyFooter from "./Components/MyFooter/MyFooter";
import { useContext, useState } from "react";
import Data from "./Components/Data/fantasy.json";
import { DarkMode } from "./Context/DarkModeProvider";
import { Container } from "react-bootstrap";
import CommentArea from "./Components/CommentArea/CommentArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //variabili per cercare i libri
  const [inputTitle, setInputTitle] = useState("");
  const [books, setBooks] = useState(Data);

  //Funzione per cercare i libri in MyNAv
  function lookForBook(e) {
    setInputTitle(e);
    let filteredBooks = Data.filter((book) =>
      book.title.toLowerCase().includes(inputTitle.toLowerCase())
    );
    setBooks(filteredBooks);
  }

  // handleChange={(e) => this.handleChange(e)}

  const [theme, setTheme] = useState("light");
  // const { theme, setTheme } = useContext(DarkMode);

  return (
    <>
      <BrowserRouter>
        <Mynav onSearch={lookForBook} theme={theme} onClick={setTheme} />
        <Routes>
          <Route
            path="/"
            element={<AllTheBooks books={books} theme={theme} />}
          />
          <Route />
        </Routes>
        <MyFooter theme={theme} />
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Container data-bs-theme={theme}>
            <AllTheBooks books={books} theme={theme} />
          </Container> */
}
