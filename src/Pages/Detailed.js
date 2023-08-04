import React from 'react'
import Navigasi from '../Components/Navigasi/Navigasi'
import FooterPage from '../Components/Footer/FooterPage'
import DisplayProduct from '../Section/ProductSection/DisplayProduct'
import NavDetailed from '../Components/NavigasiDetailed/NavDetailed'

export default function Detailed() {
  return (
    <div>
      <Navigasi />
      <NavDetailed nameProduct='Mile Crepes'/>
      <DisplayProduct tampilanTrasnparent='none' index='2'/>
      <FooterPage />
    </div>
  )
}
