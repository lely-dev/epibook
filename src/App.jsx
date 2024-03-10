import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Components/Mynav/Mynav';
import WelcomeAlert from './Components/WelcomeAlert/WelcomeAlert';
import AllTheBooks from './Components/AllTheBooks/AllTheBooks';
import MyFooter from './Components/MyFooter/MyFooter';

function App() {
  return(
    <>
      <Mynav />
      <div className='container-fluid'>
        <div className='row' id='books-list'>
          <WelcomeAlert />
          <AllTheBooks />
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default App;
