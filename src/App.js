import { 
  Route, 
  Routes,
  BrowserRouter as Router 
} from 'react-router-dom';
import './App.css';
// import Card from './components/cardProduct';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
// import React,{ useState, useEffect } from 'react';



function App() {


  
  
  

  return (
    <>
      <div className='background'>
        <Router>
          <Routes>
            <Route index element ={<Home/>} />
            <Route path='contact' element ={<Contact/>} /> 
            <Route path='*' element ={<ErrorPage/>}/>
          </Routes>
        </Router>






      </div>
    </>

  );
}

export default App;
