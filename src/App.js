import { 
  Route, 
  Routes,
  BrowserRouter as Router 
} from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

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
