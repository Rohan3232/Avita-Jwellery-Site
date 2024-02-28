
import React, { Component, useState } from 'react'
import './TryAtHome.css'
import { MdAddHomeWork } from "react-icons/md";
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { tryathomestate, addtotryoutcart } from '../actions/cartActions';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function TryAtHome({ uniemail, tryoutcart, items, userid, tryathomestate, addtotryoutcart }) {
  const appointdate = new Date();
  const [email, setEmail] = useState('');
  const [validity, setValidity] = useState(false);
  const [dob, setDOB] = useState(new Date());
  const [address, setAddress] = useState('');
  function importAll(r) {
    let carouselImages = {};
    r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
    return carouselImages
  }
  const ProductImages = importAll(require.context('../Products/images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
  function addDays(currentdate, interval) {
    currentdate.setDate(currentdate.getDate() + interval)
    return currentdate
  }
  const setStartDate = (startDate) => {
    setDOB(startDate);
  }
  const handleClick = (e) => {
    if (userid.length === 0) {
      alert('please login');
    }
    else {
      if (validity) {
        tryathomestate(email, dob, address)
      }
    }
  }

  function addtoTryoutcart(e, name) {
    addtotryoutcart(name);
    alert("added to your try out cart")
  }
  const dateSelected = (e) => {
    setDOB(e);
  }


  const handleChange = (e) => {
    let val = e.target.value;
    setEmail(val);
    if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      document.querySelector('.validity-alert-email').style.display = "block";
      setValidity(false);
    }
    else {
      document.querySelector('.validity-alert-email').style.display = "none";
      setValidity(true);
    }
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  if (uniemail.length === 0 || userid === 0) return (
    <div className="tryathome-section">
      <div className="container" >
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Your Favourite Designs at Your Doorstep!</h1>
          </div>
          <div className="col-lg-7 col-12">
            <h1 className="main-title">How it Works?</h1>
            <h3 className="title-new ">Add Designs</h3>
            <div className="desc">
              <p>Choose designs you want to try <span className="small">(Try as many as you like)</span>
              </p>
            </div>
            <h3 className="title-new">Schedule</h3>
            <div className="desc">
              <p>Select your convenient date, time & place <span className="small">(Monday to Sunday, Any time, Home/Office)</span>
              </p>
            </div>
            <h3 className="title-new ">Try</h3>
            <div className="desc">
              <p>Our Jewellery consultant will bring designs to you <span className="small">(Buy only if you like)</span>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <form method="post" className="form1 pull-right validate">
              <h3 className="title">SCHEDULE YOUR FREE TRIAL</h3>
              <div className="form-content">
                <div className="form-group email-group">
                  <div className="col-xs-12 email-address-holder">
                    <input type="text" placeholder="Email Address" className="form-control" name="email" value={email} onChange={()=>handleChange()} />
                    <span className="validity-alert-email">Please enter valid Email address</span>
                  </div>
                  <div>
                    <input type="textarea" placeholder="Address" className="form-control" name="area" value={address} onChange={()=>handleAddressChange()} />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-12 datepicker-holder">
                    <DatePicker onSelect={()=> dateSelected()} includeDateIntervals={[{ start: new Date(), end: addDays(new Date(), 7) }]} id="appoint-date" value={appointdate} className="appoint-date" selected={addDays(new Date(), 1)} onChange={(date) => setStartDate(date)} />
                    <label className="calendar-icon" htmlFor="appoint-date">
                      <FaCalendarAlt /></label>
                  </div>
                </div>
                <input className="btn schedule-button btn-primary" type="button" value="Check Jewellery" onClick={(e) => handleClick(e)}></input>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
  else {
    let currentproduct = items.map((item, key) => {
      return (
        <div key={key}>
          <NavLink to={'/cart'} className={'homecart-icon'}><span>{tryoutcart.length}</span><MdAddHomeWork /></NavLink>
          {item.types ? <div className='col-xs-12'>
            {item.types.map((type, key) => {
              return (
                <div className='row' key={key}><div className='col-12'>

                </div>
                  <div className='col-xs-12'><div className='row'>
                    {
                      item[type.name.replaceAll(' ', '')].filter((product) => {
                        return tryoutcart.indexOf(product) < 0
                      }).map((product, key) => {
                        return (
                          <div key={key} className='col-md-3 col-12 cards-holder'>
                            <div className=' product-cards'>
                              {ProductImages[product.images] ? <div className='image-holder'><img className='h-auto' src={ProductImages[product.images]} alt={product.description} /></div> : null}
                              <h6 className='product-name'>{product.name}</h6>
                              {<NavLink to={'/cart/try-at-home'} className='addtocart-button tryout-button' onClick={(e) => { addtoTryoutcart(e, product.name) }} >Try at Home</NavLink>}
                            </div>


                          </div>
                        )
                      })}
                  </div>
                  </div>
                </div>
              )
            })}
          </div> : null
          }
        </div>

      )
    });
    if (currentproduct.length > 0) {
      return (
        <div className='container products-holder'>
          {currentproduct}</div >
      )
    }
    else {
      return (<div>
        <h1 className='page-title'>Page Not Found</h1>
      </div>)
    }
  }
}
const mapStateToProps = (state) => {
  return {
    uniemail: state.email,
    tryoutcart: state.tryoutcart,
    items: state.items,
    userid: state.userid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryathomestate: (email, dob, address) => { dispatch(tryathomestate(email, dob, address)) },
    addtotryoutcart: (name) => { dispatch(addtotryoutcart(name)) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TryAtHome)
