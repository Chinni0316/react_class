import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
    return (
    <div className='fixed-bottom'>
      <section className="">
  {/* Footer */}
  <footer
    className="text-center text-white"
    style={{ backgroundColor: "#0a4275" }}
  >
    
    <div className="container p-3 pb-0">
  
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button
            data-mdb-ripple-init=""
            type="button"
            className="btn btn-outline-light btn-rounded"
          >
            Sign up!
          </button> 
         <span> Thank you Visit Again.... </span>
        </p>
      </section>
     
    </div>
    
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
   
     
       
   
    </div>
 
  </footer>

</section>

        
</div>

);
};

export default Footer;
