import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ProductDetails.css';
import { FaExchangeAlt } from "react-icons/fa";
import { addToCart, addProduct } from '../actions/cartActions';
import { MdOutlineVerified } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.Offerprice = this.Offerprice.bind(this);
        this.updateList = this.updateList.bind(this);
        this.AddtoCart = this.AddtoCart.bind(this);
    }
    AddtoCart(name) {
        this.props.addToCart(name);
        alert('added to Cart!!')

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
        return discountedprice.toFixed(2)
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
                            {this.props.currentproduct.material != null ? <span><b>Material</b> - {this.props.currentproduct.material}</span> : null}
                            {this.props.currentproduct.manufacturer != null ? <span><b>Manufacturer</b> - {this.props.currentproduct.manufacturer}</span> : null}
                            {this.props.currentproduct.metal != null ? <span><b>Metal</b> - {this.props.currentproduct.metal}</span> : null}
                            {this.props.currentproduct.chainLength != null ? <span><b>Chain Length</b> - {this.props.currentproduct.chainLength}</span> : null}
                       
                            {this.props.currentproduct.dimensions != null ? <span>
                                {Object.entries(this.props.currentproduct.dimensions).map(([index, item]) => {
                                    return (
                                        <span key={index}><b>{index}</b>- {item} <br/></span>
                                    )
                                })}
                            </span> : null}
                        </div>
                        <div className='product-descr ml-4'>
                        {this.props.currentproduct.color != null ? <span><b>Color</b> - {this.props.currentproduct.color}</span> : null}
                        {this.props.currentproduct.weight != null ? <span><b>Weight</b> - {this.props.currentproduct.weight}</span> : null}
                        {this.props.currentproduct.gemstone != null ? <span><b>Gemstone</b> - {this.props.currentproduct.gemstone}</span> : null}
                        {this.props.currentproduct.length != null ? <span><b>Length</b> - {this.props.currentproduct.length}</span> : null}
                        {this.props.currentproduct.size != null ? <span><b>Size</b> - {this.props.currentproduct.size}</span> : null}
                        {this.props.currentproduct.design!= null ? <span>
                                {Object.entries(this.props.currentproduct.design).map(([index, item]) => {
                                    return (
                                        <span key={index}><b>{index}</b>- {item} <br/></span>
                                    )
                                })}
                           </span> : null}
                           {this.props.currentproduct.diamond!= null ? <span>
                                {Object.entries(this.props.currentproduct.diamond).map(([index, item]) => {
                                    return (
                                        <span key={index}><b>{index}</b>- {item} <br/></span>
                                    )
                                })}
                           </span> : null}
                        </div>
                        <div className='addtoCart-section'>
                            {this.props.addedItems.indexOf(this.props.currentproduct)<0?
                            <button className='addtocart-button' onClick={(e) => { this.AddtoCart(this.props.currentproduct.name) }}>Add to Cart</button>
                            :  <NavLink className='addtocart-button' to={'/cart/shopping-cart'}>Go to Cart</NavLink>}
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
