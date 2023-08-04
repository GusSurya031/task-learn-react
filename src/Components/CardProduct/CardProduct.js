import React from 'react';
import './CardProduct.css';
import { Link } from 'react-router-dom';

export default function CardProduct(props) {
  return (
    <div className='card-container'>
      <Link
        to='/detailed' 
        style={{textDecoration:`none`}}       
        state={{ 
                image : props.image,
                nameProduct: props.nameProduct,
                subNameProduct: props.subNameProduct,
                harga: props.harga
              }}
      >
        <div className='image-container' 
          style={{backgroundImage: `url(${props.image})`, backgroundPosition: `top`}}>
        </div>
        <div className='desc-container'>
          <div className='description-container'>
            <h3>{props.nameProduct}</h3>
            <p>{props.subNameProduct}</p>
          </div>
          <div className='price-container'>
            <span id='price'>IDR {props.harga}</span>
            {/* <span>{props.index}</span> */}
          </div>
          {/* <button className='detailed-button'>
            More
          </button> */}
        </div>
      </Link>
    </div>
  )
}
