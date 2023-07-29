import React from 'react'
import Card from '../../Components/CardProduct/cardProduct';

export default function DisplayProduct1() {
  return (
    <div className='container_card'>
        <Card
          name="Double Oreo Mile Crepes"
          price={30.15}
          // image= {Product}
          image = {process.env.PUBLIC_URL + '/oreo-mile-crepes.jpg'}
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
  );
}

