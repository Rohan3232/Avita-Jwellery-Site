import React, {  useState } from 'react';
import { connect } from 'react-redux'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { addQuantity, addSingleQuantity, subtractQuantity, removeItem } from './actions/cartActions';
import SearchPage from './SearchPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Cart({ email,address,DOB,addedItems, total, totalQuantity, totalDiscount, tryoutcart, addQuantity, addSingleQuantity, subtractQuantity, removeItem, cart }) {
    const [tabIndex, setTabIndex] = useState((cart === 'try-at-home' || (tryoutcart.length > 0 && addedItems.length === 0)) ? 1 : 0);
    function Offerprice(discount, price) {
        let discountedprice = price - (price * discount / 100)
        return discountedprice
    }

    async function removeProduct(e, name, cartname) {
        removeItem(name, cartname);

    }
    async function addOneQuantity(name) {
        addSingleQuantity(name);
    }
    function changeQuantity(e, name) {
        let currentValue = Number(e.nativeEvent.data);
        if (0 < currentValue && currentValue <= 10) {
            addQuantity(name, currentValue)
        }
        else {
            addQuantity(name, 1)
        }


    }
    async function sendEmail(e) {
        var dob = DOB;
        dob = dob.getDate() + '/' + (dob.getMonth() + 1) + '/' + dob.getFullYear();
        var attachments = [];
        tryoutcart.map((item) => {
            attachments.push({ name: item.name, filename: item.images, path: './src/components/Products/images/products/' + item.images })
            return 0;
        })

        try {
            await axios.post('/send', {
                email, attachments, dob, address
            })
            alert('Success!!');
        }
        catch (error) {
            console.log(error);
        }
    }
    function importAll(r) {
        let carouselImages = {};
        r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
        return carouselImages
    }
    const ProductImages = importAll(require.context('./Products/images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
    let cartItems =
        (
            addedItems.map(item => {
                return (<div key={item.id} className='container cart-page details-page'>
                    <div className='row'>
                        <div className='col-md-3 col-12 product-page'>
                            <div className=' product-image'>
                                {ProductImages[item.images] ? <div className='image-holder'><img className='w-100' src={ProductImages[item.images]} alt={item.description} /></div> : null}
                                <p className='item-quantity'><FaMinus onClick={(e) => subtractQuantity(item.name)}></FaMinus><input type='number' value={item.quantity} className='quantity' onChange={(e) => changeQuantity(e, item.name)} /><FaPlus onClick={(e) => addOneQuantity(item.name)}></FaPlus> </p>
                            </div>
                        </div>
                        <div className='col-md-9 col-12 product-details'>
                            <h6 className='product-name'>{item.name}</h6>
                            <p className='desc-text'>{item.description}</p>
                            <h4 className='price'>₹{item.discount ? <span>{Offerprice(item.discount, item.price)} <span className='old-price'>{item.price}</span><span className='discount'>-{item.discount}%off</span></span> : <span>{item.price}</span>}</h4>
                            <button className='remove-button' onClick={(e) => removeProduct(e, item.name, 'addtocart')}>Remove</button>
                        </div>
                    </div>
                </div >
                )
            })
        )
    let addedTryItems =
        (
            tryoutcart.map(item => {
                return (<div key={item.id} className='container cart-page details-page'>
                    <div className='row'>
                        <div className='col-md-3 col-12 product-page'>
                            <div className=' product-image'>
                                {ProductImages[item.images] ? <div className='image-holder'><img className='w-100' src={ProductImages[item.images]} alt={item.description} /></div> : null}
                            </div>
                        </div>
                        <div className='col-md-9 col-12 product-details'>
                            <h6 className='product-name'>{item.name}</h6>
                            <p className='desc-text'>{item.description}</p>
                            <button className='remove-button' onClick={(e) => removeItem(e, item.name, 'tryoutcart')}>Remove</button>
                        </div>
                    </div>
                </div >
                )
            })
        )
    return (
        <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex)}>
            <div className='tabs-options'>
                <TabList>
                    <Tab>Shopping Cart</Tab>
                    <Tab>Trial Cart</Tab>
                </TabList>
            </div>
            <TabPanel>
                {cartItems.length > 0 ? <div className="container-fluid">
                    <div className="cart row">
                        <div className='col-12'>
                            <h5>You have in your cart:</h5>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className="collection">
                                {cartItems}
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='total-details'>
                                <h4>Price details</h4>
                                <div className='d-flex w-100 mt-4'><h6>Price ({totalQuantity} items)</h6><h6 className='ms-auto'>₹{total + totalDiscount}</h6></div>
                                <div className='d-flex mt-4'><h6>discount</h6><h6 className='ms-auto'>-₹{totalDiscount}</h6></div>
                                <div className='d-flex mt-4'><h4>Total Amount</h4><h4 className='ms-auto'>₹{total}</h4></div>
                            </div>
                        </div>
                    </div>
                </div> : <div className="container-fluid">
                    <p className='title'>Your Cart is Empty</p>
                    <SearchPage searchkey={'discount'}></SearchPage>
                </div>}
            </TabPanel>
            <TabPanel>
                {addedTryItems.length > 0 ? <div className="container-fluid">
                    <div className="cart row">
                        <div className='col-12'>
                            <h5>You have in your cart:</h5>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <div className="collection">
                                {addedTryItems}
                            </div>
                            <div className='add-more-button'>
                                <NavLink className={'addmore-icon'} to={'/TryAtHome'}><IoMdAdd /><br /> <span>Add Designs</span></NavLink>

                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='total-details'>
                                <div className='d-flex w-100 mt-4'><h6>free trial</h6><h6 className='ms-auto'>₹0</h6></div>
                                <div className='d-flex mt-4'><h6>Service Charges</h6><h6 className='ms-auto'>Free</h6></div>
                                <div className='d-flex mt-4'><h6>Total Cost</h6><h6 className='ms-auto'>₹0</h6></div>
                                <button className='schedule-button' onClick={(e) => sendEmail(e)}>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div> : <div className="container">
                    <p className='title'>Nothing to Try at Home?
                        Let's do some retail therapy.</p>
                    <NavLink className={'addmore-icon'} to={'/TryAtHome'}><IoMdAdd /><br /> <span>Add Designs</span></NavLink>
                </div>}
            </TabPanel>
        </Tabs>
    )
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        totalQuantity: state.totalQuantity,
        totalDiscount: state.totalDiscount,
        tryoutcart: state.tryoutcart,
        DOB:state.dob,
        email:state.email,
        address:state.address
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (name, quantity) => { dispatch(addQuantity(name, quantity)) },
        addSingleQuantity: (name) => { dispatch(addSingleQuantity(name)) },
        subtractQuantity: (name) => { dispatch(subtractQuantity(name)) },
        removeItem: (name, cartname) => { dispatch(removeItem(name, cartname)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)