import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from "../src/components/LoginPage/login"
import SignupPage from "../src/components/SignupPage/signup"
import Navbar from './components/Navbar/Navbar';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Navbar}/>
      <Route path='/login' Component={LoginPage}/>
      <Route path='/signup' Component={SignupPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
