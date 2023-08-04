import React from 'react';
// import home from '../../pages/home';
import { Link } from 'react-router-dom';
import './NavDetailed.css';


export default function NavDetailed(props) {
  return (
    <div className='container-navigasi'>
      <div className='container-detailed-navigasi'>
        <ul>
            <Link to = '/'>Home</Link> 
        </ul>
        <ul>
            / /
        </ul>
        <ul>
            <Link to = '/shop'>Shop</Link>
        </ul>
        <ul>
            / / 
        </ul>
        {/* <ul>
            <div className='vertical-line'></div>
        </ul>  */}
        <ul>
            <p>{props.nameProduct}</p>
        </ul>   
      </div>
    </div>
  )
}
