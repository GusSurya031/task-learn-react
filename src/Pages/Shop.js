import React from 'react'
import Navigasi from '../Components/Navigasi/Navigasi'
import FooterPage from '../Components/Footer/FooterPage'
import DisplayProduct from '../Section/ProductSection/DisplayProduct'
import { useEffect } from 'react'
import Banner2 from '../Section/Home2/Banner2'

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navigasi />
      <Banner2 />
      <DisplayProduct tampilanTrasnparent='none'/>
      <FooterPage />
    </div>
  )
}
