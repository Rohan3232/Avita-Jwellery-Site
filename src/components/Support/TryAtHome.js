import axios from "axios";
import React, { Component } from 'react'
import './TryAtHome.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import {tryathomestate } from '../actions/cartActions';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
export class TryAtHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: '',
            email: '',
            Buttontxt: 'SCHEDULE',
            message: "",
            validity:false,
            appointdate:new Date(),
            tryoutcart:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setStartDate=this.setStartDate.bind(this);
    }

    handleChange = (e) => {
        let val = e.target.value;
        this.setState({ email: val })
            if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
                document.querySelector('.validity-alert-email').style.display = "block";
                this.setState({
                    validity:false
                })
            }
            else{
                document.querySelector('.validity-alert-email').style.display = "none";
                this.setState({
                    validity:true
                })
            }
    }
    setStartDate =(startDate)=>{
        this.setState({
            appointdate:startDate
        })
    }
    handleClick = (e) => {
       if(this.state.validity)
       {
            this.props.tryathomestate(true)
       }
    }

    render() {
        function importAll(r) {
            let carouselImages = {};
            r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
            return carouselImages
        }
        const ProductImages = importAll(require.context('../Products/images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
        function addDays(currentdate,interval){
            currentdate.setDate(currentdate.getDate()+interval)
        return currentdate
        }
        if(this.props.tryoutcart.length==0) return (
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
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12 datepicker-holder">
                                        <DatePicker includeDateIntervals={[{start:new Date(), end:addDays(new Date(), 7)}]} id="appoint-date" value={this.state.appointdate} className="appoint-date" selected={addDays(new Date(), 1)} onChange={(date) => this.setStartDate(date)} />
                                        <label className="calendar-icon" htmlFor="appoint-date">
                                        <FaCalendarAlt/></label>
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
        else{
            let addedItems =
                (
                    this.props.tryoutcart.map(item => {
                        return (<div key={item.id} className='container cart-page details-page'>
                            <div className='row'>
                                <div className='col-md-3 col-12 product-page'>
                                    <div className=' product-image'>
                                        {ProductImages[item.images] ? <div className='image-holder'><img className='w-100' src={ProductImages[item.images]} alt={item.description} /></div> : null}
                                        <p className='item-quantity'><FaMinus onClick={(e) => this.props.subtractQuantity(item.name)}></FaMinus><input type='number' value={item.quantity} className='quantity' onChange={(e) => this.changeQuantity(e, item.name)} /><FaPlus onClick={(e) => this.addSingleQuantity(item.name)}></FaPlus> </p>
                                    </div>
                                </div>
                                <div className='col-md-9 col-12 product-details'>
                                    <h6 className='product-name'>{item.name}</h6>
                                    <p className='desc-text'>{item.description}</p>
                                    <h4 className='price'>₹{item.discount ? <span>{this.Offerprice(item.discount, item.price)} <span className='old-price'>{item.price}</span><span className='discount'>-{item.discount}%off</span></span> : <span>{item.price}</span>}</h4>
                                    <button className='remove-button' onClick={(e) => this.removeItem(e, item.name)}>Remove</button>
                                </div>
                            </div>
                        </div >
                        )
                    })
                )
            if (addedItems.length > 0) {
                return (
                    <div className="container">
                        <div className="cart row">
                            <div className='col-12'>
                                <h5>You have in your cart:</h5>
                            </div>
                            <div className='col-lg-8 col-12'>
                                <div className="collection">
                                    {addedItems}
                                </div>
                            </div>
                            <div className='col-lg-4 col-12'>
                                <div className='total-details'>
                                    <h4>Price details</h4>
                                    <div className='d-flex w-100 mt-4'><h6>Price ({this.props.totalQuantity} items)</h6><h6 className='ms-auto'>₹{this.props.total + this.props.totalDiscount}</h6></div>
                                    <div className='d-flex mt-4'><h6>discount</h6><h6 className='ms-auto'>-₹{this.props.totalDiscount}</h6></div>
                                    <div className='d-flex mt-4'><h4>Total Amount</h4><h4 className='ms-auto'>₹{this.props.total}</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } 
        }
    }
}

const mapStateToProps = (state) => {
    return {
      tryathome:state.tryathome
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      tryathomestate:(tryathome)=>{dispatch(tryathomestate(tryathome))}
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TryAtHome)
