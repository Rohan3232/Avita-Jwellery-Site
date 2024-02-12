import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addQuantity, addToCart, addSingleQuantity, subtractQuantity, removeItem } from './actions/cartActions';
import SearchPage from './SearchPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: (this.props.cart === 'try-at-home' || (this.props.tryoutcart.length > 0 && this.props.addedItems.length === 0)) ? 1 : 0,
        }
        this.Offerprice = this.Offerprice.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.addSingleQuantity = this.addSingleQuantity.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    Offerprice(discount, price) {
        let discountedprice = price - (price * discount / 100)
        return discountedprice
    }

    async removeItem(e, name, cartname) {
        this.props.removeItem(name, cartname);

    }
    async addSingleQuantity(name) {
        this.props.addSingleQuantity(name)
    }
    changeQuantity(e, name) {
        let currentValue = Number(e.nativeEvent.data);
        if (0 < currentValue && currentValue <= 10) {
            this.props.addQuantity(name, currentValue)
        }
        else {
            this.props.addQuantity(name, 1)
        }


    }
    async sendEmail(e) {
        var email = this.props.email;
        var tryoutcart = this.props.tryoutcart;
        var address = this.props.address;
        var dob = this.props.dob;
        dob = dob.getDate() + '/' + (dob.getMonth() + 1) + '/' + dob.getFullYear();
        var attachments = [];
        tryoutcart.map((item, index) => {
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
    render() {
        function importAll(r) {
            let carouselImages = {};
            r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
            return carouselImages
        }
        const ProductImages = importAll(require.context('./Products/images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
        let addedItems =
            (
                this.props.addedItems.map(item => {
                    return (<div key={item.id} className='container cart-page details-page'>
                        <div className='row'>
                            <div className='col-md-3 col-12 product-page'>
                                <div className=' product-image'>
                                    {ProductImages[item.images] ? <div className='image-holder'><img loading="lazy" className='w-100' src={ProductImages[item.images]} alt={item.description} /></div> : null}
                                    <p className='item-quantity'>
                                        <svg onClick={(e) => this.props.subtractQuantity(item.name)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                        </svg>
                                        <input type='number' value={item.quantity} className='quantity' onChange={(e) => this.changeQuantity(e, item.name)} />
                                        <svg onClick={(e) => this.addSingleQuantity(item.name)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg> </p>
                                </div>
                            </div>
                            <div className='col-md-9 col-12 product-details'>
                                <h6 className='product-name'>{item.name}</h6>
                                <p className='desc-text'>{item.description}</p>
                                <h4 className='price'>₹{item.discount ? <span>{this.Offerprice(item.discount, item.price)} <span className='old-price'>{item.price}</span><span className='discount'>-{item.discount}%off</span></span> : <span>{item.price}</span>}</h4>
                                <button className='remove-button' onClick={(e) => this.removeItem(e, item.name, 'addtocart')}>Remove</button>
                            </div>
                        </div>
                    </div >
                    )
                })
            )
        let addedTryItems =
            (
                this.props.tryoutcart.map(item => {
                    return (<div key={item.id} className='container cart-page details-page'>
                        <div className='row'>
                            <div className='col-md-3 col-12 product-page'>
                                <div className=' product-image'>
                                    {ProductImages[item.images] ? <div className='image-holder'><img loading="lazy" className='w-100' src={ProductImages[item.images]} alt={item.description} /></div> : null}
                                </div>
                            </div>
                            <div className='col-md-9 col-12 product-details'>
                                <h6 className='product-name'>{item.name}</h6>
                                <p className='desc-text'>{item.description}</p>
                                <button className='remove-button' onClick={(e) => this.removeItem(e, item.name, 'tryoutcart')}>Remove</button>
                            </div>
                        </div>
                    </div >
                    )
                })
            )
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <div className='tabs-options'>
                    <TabList>
                        <Tab>Shopping Cart</Tab>
                        <Tab>Trial Cart</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    {addedItems.length > 0 ? <div className="container-fluid">
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
                                    <NavLink className={'addmore-icon'} to={'/TryAtHome'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg><br /> <span>Add Designs</span></NavLink>

                                </div>
                            </div>
                            <div className='col-lg-4 col-12'>
                                <div className='total-details'>
                                    <div className='d-flex w-100 mt-4'><h6>free trial</h6><h6 className='ms-auto'>₹0</h6></div>
                                    <div className='d-flex mt-4'><h6>Service Charges</h6><h6 className='ms-auto'>Free</h6></div>
                                    <div className='d-flex mt-4'><h6>Total Cost</h6><h6 className='ms-auto'>₹0</h6></div>
                                    <button className='schedule-button' onClick={(e) => this.sendEmail(e)}>Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="container">
                        <p className='title'>Nothing to Try at Home?
                            Let's do some retail therapy.</p>
                        <NavLink className={'addmore-icon'} to={'/TryAtHome'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg><br /> <span>Add Designs</span></NavLink>
                    </div>}
                </TabPanel>
            </Tabs>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        totalQuantity: state.totalQuantity,
        totalDiscount: state.totalDiscount,
        userid: state.userid,
        password: state.password,
        tryoutcart: state.tryoutcart,
        email: state.email,
        dob: state.dob,
        address: state.address
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (name) => { dispatch(addToCart(name)) },
        addQuantity: (name, quantity) => { dispatch(addQuantity(name, quantity)) },
        addSingleQuantity: (name) => { dispatch(addSingleQuantity(name)) },
        subtractQuantity: (name) => { dispatch(subtractQuantity(name)) },
        removeItem: (name, cartname) => { dispatch(removeItem(name, cartname)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)