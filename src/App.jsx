import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav/Mynav';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import AllTheBooks from './Components/AllTheBooks/AllTheBooks';
import MyFooter from './Components/MyFooter/MyFooter';

function App() {
  return(
    <>
      <Mynav />
      <Jumbotron />
      <div className='container-fluid'>
          <AllTheBooks />
      </div>
      <MyFooter />
    </>
  )
}

export default App;
