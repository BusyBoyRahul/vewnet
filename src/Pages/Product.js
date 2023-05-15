import React from 'react'
import {Link} from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Product(props) {
    
  return (
    <div>

        <div className="container">
        <Link to="/"><span className='btn btn-info text-light fs-5'><IoMdArrowRoundBack /> Back</span></Link>

        <div className="container-fluid d-lg-flex flex-wrap">
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
        </div>

        </div>

        
      
    </div>
  )
}
