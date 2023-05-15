import React from 'react'
import Eyeglass from '../Components/Eyeglass'
import Brands from '../Components/Brands'
import Footer from '../Components/Footer'



export default function Explore() {
  return (
    <div>

          <img className='w-100' src="https://cdn.eyemyeye.com/desktop/images/banners/listing/vv1.jpg" alt="" />
          <Eyeglass title="Trending Eye Frames" jsn="trending" />
          <Eyeglass title="Popular Eye Frames" jsn="popular" />
          <Eyeglass title="Trending Sunglasses" jsn="popular" />
          <Eyeglass title="Season Sale" jsn="popular" />
          <Eyeglass title="Premium Sunglasses" jsn="popular" />
          <Brands />
          <Eyeglass title="Best Shape Frames" jsn="popular" />
          <Eyeglass title="Color Blind Glasses" jsn="popular" />
          <img className='w-100' src="https://cdn.eyemyeye.com/desktop/banners/listing/free-lenses-extra-off-1.jpg" alt="" />
          <Eyeglass title="Low Cost Frames" jsn="popular" />
          <Eyeglass title="Night Vision Frames" jsn="popular" />
          <Footer />
      
    </div>
  )
}
