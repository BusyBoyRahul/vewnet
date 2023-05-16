import React, { useState , useEffect } from "react";
import {Link} from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Product() {

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setImg(localStorage.getItem("img"));
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
    setPrice(localStorage.getItem("price"));

  }, []);

  return (
    <div>

        <div className="container">
        <Link to="/"><span className='btn btn-info text-light fs-5'><IoMdArrowRoundBack /> Back</span></Link>

        <div className="container-fluid ppage d-lg-flex flex-wrap">
            <div className="container-fluid">
            <img className="border mt-3 shadow" src={img} alt="" />
            </div>
            <div className="container">
            <h2 className="mt-3">{title}</h2>
            <h6>{description}</h6>
            <h2>{price}$</h2>

            <div className="btn btn-info text-light fs-4 px-5 py-2 mt-5">Order now</div>
            </div>
            
        </div>

        </div>

        
      
    </div>
  )
}
