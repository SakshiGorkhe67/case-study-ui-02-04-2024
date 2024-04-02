import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HomeNavbar from "../inc/navbar";
import Headertop from "../inc/headertop";
import Footer from "./footer/footer";
import bannera from './bannera.jpg';
import bannerb from './bannerb.jpg';
import lenevo from './images/lenevo.jpeg';
import lenevo1 from './images/lenevo1.jpeg';
import lenevo2 from './images/lenevo2.jpeg';
import lenevo3 from './images/lenevo3.jpeg';
import dell1 from './images/dell1.jpeg';
import dell2 from './images/dell2.jpeg';
import dell3 from './images/dell3.jpeg';
import './shop.css';
import './brans.css';
function AboutUs() {
  return (
    <>
      <Headertop />
      <HomeNavbar />


      <div class="container1">
        <ol class="breadcrumb ">
          <li class="list-item px-2 text-secondary ">
            <Link to="/userhome">Home</Link>
          </li>
          <li class="list-item px-2 text-secondary">
            <a href="">Shop</a>
          </li>
          <li class="list-item px-2 text-secondary">
            <a href="">Electronics</a>
          </li>

        </ol>

        {/*Top Banner*/}
      </div>
      <div id="carouselExampleControls" class="carousel slide centered-carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={bannera} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={bannerb} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={bannera} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/**All Products Display 1st row */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/**product 1 */}
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={lenevo} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"> <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>

          </div>
        </div>
        {/**product 2 */}
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={lenevo1} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={lenevo2} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={lenevo3} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>

      </div>
      {/**All Products Display 2nd row */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {/**product 1 */}
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={dell1} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>

          </div>
        </div>
        {/**product 2 */}
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={dell2} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={dell3} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>
        <div className="card" style={{ width: "14rem", margin: "20px 5px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
          <img className="card-img-top" src={lenevo} alt="Card image cap" />
          <div className="card-body">
            <p>Dell 3501 Inspiron 3000 Laptop (10th Gen Intel Core i3-1005G1/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)(491947331)</p>
            <button type="button" class="btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} style={{ color: 'skyblue' }} /> ADD TO CART</button>
          </div>
        </div>

      </div>



      {/*side nav* */}
<Footer />

    </>
  );
} export default AboutUs;