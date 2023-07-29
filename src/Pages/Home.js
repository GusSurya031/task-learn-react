/* eslint-disable no-undef */
import React from 'react'
import Navigasi from '../Components/Navigasi/Navigasi';
import BannerHome from '../Section/Home/BannerHome';

export default function Home() {
  const products = [
    {
      title: "Wedding Cake",
      varriant: "Strawberry Mile Crepes",
      deskripsi: "Kue dengan lapisan selai strawberry",
      harga: "18.000",
    },
    {
      title: "Birthday Cake",
      varriant: "Chocolate Mile Crepes",
      deskripsi: "Kue dengan lapisan selai Coklat",
      harga: "150.000",
    },
    {
      title: "Hamppers Cake",
      varriant: "Kue Nastar, Kue Putri Salju",
      deskripsi: "Kue Natal",
      harga: "250.000",
    },
    {
      title: "Wedding Cake",
      varriant: "Flower Cake",
      deskripsi: "Kue dengan 3 tumpukan",
      harga: "600.000",
    },
    {
      title: "Birthday Cake",
      varriant: "Civvon Crepes",
      deskripsi: "Kue dengan beragam varriant rasa",
      harga: "250.000",
    },
  ]
  
  return (
    <div className='Home'>
      <Navigasi />
      <BannerHome />
      <ul>
        {products.map((product,index) =>
          <li key={index}>
            {product.title}<br/> 
            {product.varriant}<br/>
            {product.deskripsi}<br/>
            {product.harga}<br/>
          </li>
        )}
      </ul>
      <form>
        <label for='fname'>Nama Anda :</label><br/>
        <input type='text' id='fname'></input>
      </form>
    </div>
  )
}
