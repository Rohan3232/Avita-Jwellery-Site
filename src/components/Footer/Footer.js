
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { RiVisaLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaTwitter,FaHome } from 'react-icons/fa';
import { FaCcMastercard, FaAmazonPay } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="FooterBody">
      <MDBContainer className="footer-main mt-5 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="6" sm="6" lg="3" xl="3" className="mb-3 text-left">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ABOUT US</strong>
            </h6>


            <p className="links">
              <NavLink to="/offers" className="Footer-NavLink">
                Who we are?
              </NavLink>
            </p>
            <p className="links">
              <NavLink className="Footer-NavLink" to="/offers"  >
                Management Team
              </NavLink>
            </p>
            <p className="links">
              <NavLink to="/TermsCond" className="Footer-NavLink">
                Terms and Conditions
              </NavLink>
            </p>
            <p className="links">
              <NavLink to="/Privacy" className="Footer-NavLink">
                Company Policy
              </NavLink>

            </p>
          </MDBCol>
          <MDBCol md="6" sm="6" lg="3" xl="3" className="mb-3 text-left">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACT US</strong>
            </h6>

            <p className="links">
              <NavLink className="Footer-NavLink" to="/FAQ"  >
                FAQ
              </NavLink>
            </p>
            <p className="links">
              <NavLink className="Footer-NavLink" to="/Contactus"  >
                Contact Us
              </NavLink>
            </p>
            <p >
              (9 am-10 pm, 7 days a week)
            </p>
          </MDBCol>
          <MDBCol md="6" sm="6" lg="3" xl="3" className="mb-3 text-left">
          <h6 className="text-uppercase font-weight-bold">
              <strong>Know your Jwellery</strong>
            </h6>
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
                Gold Price
              </NavLink>
            </p>
            
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
                Diamond Guide
              </NavLink>
            </p>
            
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
               Jwellery Guide
              </NavLink>
            </p>
            
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
                Digital Gold
              </NavLink>
            </p>

          </MDBCol>
          <MDBCol md="6" sm="6" lg="3" xl="3" className="mb-3 text-left">
          <h6 className="text-uppercase font-weight-bold">
              <strong>Our Advantages</strong>
            </h6>
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
                15 Days Return
              </NavLink>
            </p>
            
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
                Free Shipping
              </NavLink>
            </p>
            
            <p className="links">
              <NavLink to="https://goldprice.org/" className="Footer-NavLink">
               Old Gold Exchange
              </NavLink>
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="footer-secondary text-center text-md-left">
        <MDBRow >
      <MDBCol md="12" lg="12" xl="12" className=" text-left d-flex">
            <div className="social-icons">
              <a className="btn-floating btn-small btn-fb">
                <FaFacebookF size="25" />
              </a>
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <FaInstagram size="25" />
              </a>

              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <FaTwitter size="25" />
              </a>
              
              
            </div>
            <div className='payment-parteners'>
              <RiVisaLine size="40" />
              <FaCcMastercard size="40" />
              <FaAmazonPay size="40" />
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
        </MDBContainer>
      </div>
    </div>
  )
}
