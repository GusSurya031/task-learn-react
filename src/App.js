import logo from './logo.svg';
import './App.css';
import Card from './components/cardProduct';
import React,{ useState } from 'react';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcom to the first learn!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <div className='background'>
        <h1>LIST PRODUK</h1>
        <div className='container_card'>
          <Card
            name="Double Oreo Mile Crepes"
            price={30.15}
            image= {process.env.PUBLIC_URL + '/oreo-mile-crepes.jpg'}
            description={"lorem ipsum sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"}
            // className="Card"
          />
          <Card
            name="Choco Mile Crepes"
            price={54.20}
            image= {process.env.PUBLIC_URL + '/double-choco.jpg'}
            description={"lorem ipsum sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"}
            // className="Card"
          />
          <Card
            name="Strawberry Mile Crepes"
            price={40.05}
            image= {process.env.PUBLIC_URL + '/strawberry-mile-crepes.jpg'}
            description={"lorem ipsum sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"}
            // className="Card"
          />
          
        </div>
      </div>
    
    
    
    </>


  );
}

export default App;
