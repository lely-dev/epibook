import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav/Mynav';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import AllTheBooks from './Components/AllTheBooks/AllTheBooks';
import MyFooter from './Components/MyFooter/MyFooter';
import Data from "../Data/fantasy.json";
import { useState } from 'react';


function App() {
  
 //variabili per cercare i libri
  const [inputTitle, setInputTitle] = useState("");
  const [books, setBooks] = useState(Data);

 //Funzione per cercare i libri in MyNAv
  function lookForBook(e){
    setInputTitle(e);
    let filteredBooks = Data.filter((book) =>
    book.title.toLowerCase().includes(inputTitle.toLowerCase()));
    setBooks(filteredBooks);
  }

  // handleChange={(e) => this.handleChange(e)}

  return(
    <>
      <Mynav 
      value={inputTitle}
      onChange={(e) => lookForBook(e.target.value)}/>
      <Jumbotron />
      <div className='container-fluid'>
          <AllTheBooks 
          books={books}/>
      </div>
      <MyFooter />
    </>
  )
}

export default App;
