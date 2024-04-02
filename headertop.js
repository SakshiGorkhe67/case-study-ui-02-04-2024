import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {Link}from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CLAlogo from './CLAlogo.jpeg';



const Headertop = () => {
  return (
   <>
   {/**top header */}
   <header class="py-2 " style={{ backgroundColor: '#f8f9fa' }}>
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-auto me-lg-auto mb-2 justify-content-center">
                <li class="px-2 text-secondary">
      <FontAwesomeIcon icon={faPhone} />  Call:+21-45-323-436</li>
            </ul>
            <div class="text-end">
                <p class="px-2 text-secondary">login/signup</p>
                
            </div>
        </div>
    </div>
</header>
                     {/**header 2 */}

     <header class="py-2 " style={{ backgroundColor: '#f8f9fa' }}>
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-auto me-lg-auto mb-2 justify-content-center">
                <li><Link to="/"class="nav-link active  px-2 text-secondary" style={{ top: '80px', zIndex: '1000' }}>
      <img src={ CLAlogo} width="auto" height="40"alt="clalogo"/>
    </Link></li>
            </ul>
            <div class="text-end d-flex">
            <p className="px-2 text-secondary"><FontAwesomeIcon icon={faUser} /></p>
          <p className="px-2 text-secondary"><Link to=""><FontAwesomeIcon icon={faShoppingCart} /></Link> </p>
                
            </div>
        </div>
    </div>
</header>

     
    </>
  );
 
}

export default Headertop