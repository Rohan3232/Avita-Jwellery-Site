import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ProductDetails.css';
import { FaExchangeAlt } from "react-icons/fa";
import { addToCart, addProduct } from '../actions/cartActions';
import { MdOutlineVerified } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import axios from "axios";
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.Offerprice = this.Offerprice.bind(this);
        this.updateList = this.updateList.bind(this);
        this.AddtoCart = this.AddtoCart.bind(this);
    }
    AddtoCart(name) {
        this.props.addToCart(name);

    }
    sendDetails = (item) => {
        this.props.viewDetails(item);
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

    Offerprice(discount, price) {
        let discountedprice = price - (price * discount / 100)
        return discountedprice
    }
    updateList() {

        var currentUrl = window.location.pathname;
        currentUrl = currentUrl.slice(10, currentUrl.length).replaceAll('%20', ' ');;
        var urlList = currentUrl.split('/')
        var productList = {}
        this.props.items.filter(product => {
            if (urlList[0] == product.title) {
                if (urlList[1] == undefined) {
                    productList = product;
                    return product;
                }
                else {
                    product.types.filter(producttype => {
                        if (producttype.name == urlList[1])
                            if (urlList[2] == undefined) {
                                productList = product[producttype.name.replaceAll(' ', '')];
                                return product[producttype.name.replaceAll(' ', '')]
                            }
                            else
                                product[producttype.name.replaceAll(' ', '')].filter(product => {
                                    if (product.name == urlList[2]) {
                                        productList = product;
                                        return product;
                                    }
                                })

                    })
                    return null;
                }
            }

        })
        if (productList.id != undefined)
            this.props.addProduct(productList)

    }
    render(e) {
        function importAll(r) {
            let carouselImages = {};
            r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
            return carouselImages
        }
        const ProductImages = importAll(require.context('./images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
        this.updateList(e);
        if (this.props.currentproduct.id != undefined) {
            return (<div key={this.props.currentproduct.id} className='container details-page'>
                <div className='row'>
                    <div className='col-md-5 col-12 product-page'>
                        <div className=' product-image'>
                            {ProductImages[this.props.currentproduct.images] ? <div className='image-holder'><img className='w-100 h-auto' src={ProductImages[this.props.currentproduct.images]} alt={this.props.currentproduct.description} /></div> : null}
                        </div>
                        <div className='offers'><span><GiReturnArrow />15 days Moneyback</span><span><MdOutlineVerified />100% Certified</span><span><FaExchangeAlt></FaExchangeAlt> Lifetime Exchange</span></div>
                    </div>
                    <div className='col-md-7 col-12 product-details'>
                        <h6 className='product-name'>{this.props.currentproduct.name}</h6>
                        <h6 className='title'>Product Details</h6>
                        <p className='desc-text'>{this.props.currentproduct.description}</p>
                        <h4 className='price'>₹{this.props.currentproduct.discount ? <span>{this.Offerprice(this.props.currentproduct.discount, this.props.currentproduct.price)} <span className='old-price'>{this.props.currentproduct.price}</span><span className='discount'>-{this.props.currentproduct.discount}%off</span></span> : <span>{this.props.currentproduct.price}</span>}</h4>
                        <div className='product-descr'>
                            {this.props.currentproduct.weight != null ? <span>Weight - Gross {this.props.currentproduct.weight}g</span> : null}
                            {this.props.currentproduct.design != null ? <span>design - {this.props.currentproduct.design}</span> : null}
                            {this.props.currentproduct.stones != null ? <span>Stones -
                                {this.props.currentproduct.stones.map((item, index) => {
                                    return (
                                        <span key={index}>{index != 0 ? ', ' + item : item}</span>
                                    )
                                })}
                            </span> : null}
                        </div>
                        <div className='product-descr ml-4'>
                            {this.props.currentproduct.purity != null ? <span>Purity - {this.props.currentproduct.purity}</span> : null}
                        </div>
                        <div className='addtoCart-section'>
                            <button className='addtocart-button' onClick={(e) => { this.AddtoCart(this.props.currentproduct.name) }}>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div >

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
        currentproduct: state.currentproduct,
        items: state.items,
        addedItems: state.addedItems,
        total: state.total,
        totalQuantity: state.totalQuantity,
        totalDiscount:state.totalDiscount,
        userid:state.userid,
    password:state.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (name) => { dispatch(addToCart(name)) },
        addProduct: (product) => { dispatch(addProduct(product)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
