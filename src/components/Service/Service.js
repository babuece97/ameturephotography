import React from 'react';
import './Service.css';
import { Link, useNavigate } from "react-router-dom";




const Service = (props) => {
  const navigate=useNavigate()
  const navigateDetail=()=>{
    navigate("/checkOut");
  }
    const { img, name, Description,price} = props.service;
 return ( <div className="service">
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>  {Description}</h6>
            <h3>Fees: {price}</h3>
            <Link to="/checkOut">
          <button  onClick ={navigateDetail}className="btn-btn-primany"> Call for Booking
          </button>
        </Link>
        </div>
    );
};

export default Service;
