import React from 'react'

import Brand from "../Json/Brands.json";



export default function Brands() {
  return (
    <div>
      <div className='clor'>
      <h1 className='text-center pt-5 fs-2'><u>Eyeglasses Brands</u></h1>
    
    <div className='container  brands'>
      
      
       
      {Brand.map((data) => {
        return (
          
        <div className="brand border border-3 border-dark m-3">
          <div className="image "><img className='w-100' src={data.image} alt="" /></div>
        </div>
        
        
        
        );
      })}
      
    </div>
    </div>
    <div className="container d-lg-flex text-center">
    <img className='courselw m-1 mt-3' src="https://cdn.eyemyeye.com/desktop/home-page/men-sunglasses.jpg" alt="" />
    <img className='courselw m-1 mt-3' src="https://cdn.eyemyeye.com/desktop/home-page/women-sunglasses.jpg" alt="" />
    </div>
    </div>
  )
}
