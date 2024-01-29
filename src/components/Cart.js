import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FaPlus, FaMinus } from "react-icons/fa";
import { addQuantity, addToCart, addSingleQuantity, subtractQuantity, removeItem } from './actions/cartActions';
import SearchPage from './SearchPage';
import axios from 'axios';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.Offerprice = this.Offerprice.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.addSingleQuantity = this.addSingleQuantity.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    Offerprice(discount, price) {
        let discountedprice = price - (price * discount / 100)
        return discountedprice
    }

    async removeItem(e, name) {
        this.props.removeItem(name);
        
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
        } else {
            return (<div className="container">

                <p className='title'>Your Cart is Empty</p>
                <SearchPage searchkey={'discount'}></SearchPage>
            </div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        totalQuantity: state.totalQuantity,
        totalDiscount: state.totalDiscount, 
        userid:state.userid,
        password:state.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (name) => { dispatch(addToCart(name)) },
        addQuantity: (name, quantity) => { dispatch(addQuantity(name, quantity)) },
        addSingleQuantity: (name) => { dispatch(addSingleQuantity(name)) },
        subtractQuantity: (name) => { dispatch(subtractQuantity(name)) },
        removeItem: (name) => { dispatch(removeItem(name)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)