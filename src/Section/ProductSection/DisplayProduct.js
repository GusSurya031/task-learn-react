import React from 'react';
import CardProduct from '../../Components/CardProduct/CardProduct';
import './DisplayProduct.css';
import HeaderSection from '../HeaderAllSection/HeaderSection';

import WeddingCake from '../../Image/WeddingCake.png'
import { Link } from 'react-router-dom';

export default function DisplayProduct(props) {
    const products = [
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },      
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
      {
        image: WeddingCake, nameProduct: 'Strawberry Mile Crepes', subNameProduct: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', harga: '120.000'
      },
    ]


  return (
    <>
      <HeaderSection titleHeader = "There're Our Product" subTitle = 'It will be fresh home made and arrive clearly to customer'/>
      <div className='container-section'>
        <div className='container-cards'>
          {
            products.map((products,index)=>{
              return(
                <CardProduct 
                image = {products.image}
                nameProduct = {products.nameProduct}
                subNameProduct = {products.subNameProduct}
                harga = {products.harga}
                // index = {index}
                />
                )
              })
            }
        </div>
        <div className='background-transparent' style={{display: `${props.tampilanTrasnparent}`}}>
          <div className='more-button'>
            <Link to ='/Shop' id = 'Shop'>More Product</Link>
          </div>
        </div>
      </div>
    </>
  )
}
