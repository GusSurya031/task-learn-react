import { 
  Route, 
  Routes,
  BrowserRouter as Router 
} from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='background'>
        <Router>
          <Routes>
            <Route index element ={<Home/>} />
            <Route path='shop' element={<Shop />} />
            <Route path='contact' element ={<Contact/>} /> 
            <Route path='*' element ={<ErrorPage/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
