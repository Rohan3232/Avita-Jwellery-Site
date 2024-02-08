import axios from "axios";
import React, { Component } from 'react'
import './TryAtHome.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import { tryathomestate, addtotryoutcart } from '../actions/cartActions';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Products from "../Products/Products";
import { NavLink } from "react-router-dom";
export class TryAtHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: '',
      email: '',
      Buttontxt: 'Select Jwellery',
      message: "",
      validity: false,
      appointdate: new Date(),
      dob: new Date(),
      address: '',
      tryoutcart: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.addtoTryoutcart = this.addtoTryoutcart.bind(this);
    this.dateSelected = this.dateSelected.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleChange = (e) => {
    let val = e.target.value;
    this.setState({ email: val })
    if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      document.querySelector('.validity-alert-email').style.display = "block";
      this.setState({
        validity: false
      })
    }
    else {
      document.querySelector('.validity-alert-email').style.display = "none";
      this.setState({
        validity: true
      })
    }
  }
  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ currentUrl: window.location.pathname });
    }, 100);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ currentUrl: window.location.pathname });
    }, 100);
  }
  setStartDate = (startDate) => {
    this.setState({
      appointdate: startDate
    })
  }
  handleClick = (e) => {
    if(this.props.userid==0)
    {
      alert('please login');
    }
    else{
    if (this.state.validity) {
      this.props.tryathomestate(this.state.email,this.state.dob,this.state.address)
    }
  }
  }

  addtoTryoutcart(e, name) {
    this.props.addtotryoutcart(name);
    alert("added to your try out cart")
  }
  dateSelected = (e) => {
    this.setState({
      dob: e
    })
  }
  render() {
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
    if (this.props.email.length == 0 || this.props.userid == 0) return (
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
                      <input type="text" placeholder="Email Address" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                      <span className="validity-alert-email">Please enter valid Email address</span>
                    </div>
                    <div>
                    <input type="textarea" placeholder="Address" className="form-control" name="area" value={this.state.address} onChange={this.handleAddressChange} />
                  </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="col-xs-12 datepicker-holder">
                      <DatePicker onSelect={this.dateSelected} includeDateIntervals={[{ start: new Date(), end: addDays(new Date(), 7) }]} id="appoint-date" value={this.state.appointdate} className="appoint-date" selected={addDays(new Date(), 1)} onChange={(date) => this.setStartDate(date)} />
                      <label className="calendar-icon" htmlFor="appoint-date">
                        <FaCalendarAlt /></label>
                    </div>
                  </div>
                  <input className="btn schedule-button btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick}></input>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
    else {
      let currentproduct = this.props.items.map((item, key) => {
        return (
          <div key={key}>
            <NavLink to={'/cart'} className={'homecart-icon'}><span>{this.props.tryoutcart.length}</span><MdAddHomeWork /></NavLink>
            {item.types ? <div className='col-xs-12'>
              {item.types.map((type, key) => {
                {
                  return (
                    <div className='row' key={key}><div className='col-12'>

                    </div>
                      <div className='col-xs-12'><div className='row'>
                        {
                          item[type.name.replaceAll(' ', '')].filter((product) => {
                            return this.props.tryoutcart.indexOf(product) < 0
                          }).map((product, key) => {
                            return (
                              <div key={key} className='col-md-3 col-12 cards-holder'>
                                <div className=' product-cards'>
                                  {ProductImages[product.images] ? <div className='image-holder'><img className='h-auto' src={ProductImages[product.images]} alt={product.description} /></div> : null}
                                  <h6 className='product-name'>{product.name}</h6>
                                  {<NavLink to={'/cart/try-at-home'} className='addtocart-button tryout-button' onClick={(e) => { this.addtoTryoutcart(e, product.name) }} >Try at Home</NavLink>}
                                </div>


                              </div>
                            )
                          })}
                      </div>
                      </div>
                    </div>
                  )
                }
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
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    tryoutcart: state.tryoutcart,
    items: state.items,
    userid:state.userid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryathomestate: (email,dob,address) => { dispatch(tryathomestate(email,dob,address)) },
    addtotryoutcart: (name) => { dispatch(addtotryoutcart(name)) }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TryAtHome)
