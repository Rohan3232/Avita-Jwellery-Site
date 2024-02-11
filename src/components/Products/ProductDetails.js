import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ProductDetails.css';
import { FaExchangeAlt } from "react-icons/fa";
import { addToCart, addProduct, addFeedback } from '../actions/cartActions';
import { MdOutlineVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoSend } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
export class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackvalue: "",
            rating: 0,
            alreadygivenfbk: false
        }
        this.Offerprice = this.Offerprice.bind(this);
        this.updateList = this.updateList.bind(this);
        this.AddtoCart = this.AddtoCart.bind(this);
        this.addFeedback = this.addFeedback.bind(this);
        this.updateFeedback = this.updateFeedback.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.setRating = this.setRating.bind(this);
    }
    AddtoCart(name) {
        this.props.addToCart(name);
        alert('added to Cart!!')

    }
    setRating(e) {
        var rating = 0;
        if (e.target.id != '')
            rating = e.target.id;
        else if (e.target.parentElement.id)
            rating = e.target.parentElement.id;
        this.setState({
            rating: rating
        })

    }
    submitForm(e) {
        e.preventDefault();
        if (this.state.feedbackvalue != '' && this.state.rating > 0) {
            this.setState({
                alreadygivenfbk: true
            })
            this.props.addFeedback(this.props.currentproduct.name, this.state.feedbackvalue, this.props.userid, this.state.rating)
        }
        else {
            alert('please fill all fields')
        }

    }
    addFeedback() {
        if (this.props.userid != '') {
            this.fdbkform.hidden = false;
            this.fdbkinput.focus()
        }

    }
    sendDetails = (item) => {
        this.props.viewDetails(item);
    }
    updateFeedback(e) {
        this.setState({
            feedbackvalue: e.target.value
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
        let discountedprice = price - (price * discount / 100);
        return Math.round(discountedprice);
    }
    updateList() {

        var currentUrl = window.location.pathname;
        currentUrl = currentUrl.slice(10, currentUrl.length).replaceAll('%20', ' ');;
        var urlList = currentUrl.split('/')
        var productList = {}
        this.props.items.filter(product => {
            if (urlList[0] === product.title) {
                if (urlList[1] === undefined) {
                    productList = product;
                    return product;
                }
                else {
                    product.types.filter(producttype => {
                        if (producttype.name === urlList[1])
                            if (urlList[2] === undefined) {
                                productList = product[producttype.name.replaceAll(' ', '')];
                                return product[producttype.name.replaceAll(' ', '')]
                            }
                            else
                                product[producttype.name.replaceAll(' ', '')].filter(product => {
                                    if (product.name === urlList[2]) {
                                        productList = product;
                                        return product;
                                    }
                                    return false;
                                })
                        return false;
                    })
                    return null;
                }
            }
            return false;
        })
        if (productList.id !== undefined)
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
        if (this.props.currentproduct.id !== undefined) {
            return (<div key={this.props.currentproduct.id} className='container details-page'>
                <div className='row'>
                    <div className='col-md-5 col-12 product-page'>
                        <div className=' product-image'>
                            {ProductImages[this.props.currentproduct.images] ? <div className='image-holder'><img className='w-100 h-auto' src={ProductImages[this.props.currentproduct.images]} alt={this.props.currentproduct.description} /></div> : null}
                            <div className='offers'><span><GiReturnArrow />15 days Moneyback</span><span><MdOutlineVerified />100% Certified</span><span><FaExchangeAlt></FaExchangeAlt> Lifetime Exchange</span></div>

                        </div>
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
                                        <span key={index}><b>{index}</b>- {item} <br /></span>
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
                            {this.props.currentproduct.design != null ? (typeof (this.props.currentproduct.design) != 'string' ? <span>
                                {Object.entries(this.props.currentproduct.design).map(([index, item]) => {
                                    return (
                                        <span key={index}><b>{index}</b>- {item} <br /></span>
                                    )
                                })}
                            </span> : <span><b>Design</b> - {this.props.currentproduct.design}</span>) : null}
                            {this.props.currentproduct.diamond != null ? <span>
                                {Object.entries(this.props.currentproduct.diamond).map(([index, item]) => {
                                    return (
                                        <span key={index}><b>{index}</b>- {item} <br /></span>
                                    )
                                })}
                            </span> : null}
                        </div>
                        <div className='feedback-section'>
                            <h4 className='title-feedback'>Customer Ratings <button className={this.state.alreadygivenfbk ? 'hide' : 'show'} onClick={() => { this.addFeedback() }}> Rate Product</button></h4>

                            {this.props.currentproduct.ratings != null ? <span>
                                {this.props.currentproduct.ratings.map((item, index) => {
                                    console.log(item.user)
                                    console.log(this.props.userid)
                                    return (
                                        <div key={index} style={item.user === this.props.userid ? { borderColor: 'green' } : { borderColor: 'black' }} className='customer-feedback'>
                                            <p>{item.comment} <span className='rating'><FaStar />{item.rating}</span></p>
                                            <p><b>- {item.user}</b></p>
                                        </div>
                                    )
                                })}
                            </span> : null}
                            {!this.state.alreadygivenfbk ?
                                <form onSubmit={(e) => { this.submitForm(e) }} ref={(ff) => this.fdbkform = ff} className='feedback-form' hidden>
                                    <div className='rating-star' onClick={(e) => this.setRating(e)}><FaStar color={this.state.rating >= 1 ? 'goldenrod' : 'black'} id="1" /><FaStar color={this.state.rating >= 2 ? 'goldenrod' : 'black'} id="2" /><FaStar color={this.state.rating >= 3 ? 'goldenrod' : 'black'} id="3" /><FaStar color={this.state.rating >= 4 ? 'goldenrod' : 'black'} id="4" /><FaStar color={this.state.rating >= 5 ? 'goldenrod' : 'black'} id="5" />
                                    </div>
                                    <div className='d-flex'>
                                        <input value={this.state.feedbackvalue} onChange={(e) => { this.updateFeedback(e) }} type='text' ref={(fi) => this.fdbkinput = fi}></input><button type='submit'><IoSend /></button>
                                    </div>

                                </form>
                                : null}
                        </div>
                        <div className='addtoCart-section'>
                            {this.props.addedItems.indexOf(this.props.currentproduct) < 0 ?
                                <button className='addtocart-button' onClick={(e) => { this.AddtoCart(this.props.currentproduct.name) }}>Add to Cart</button>
                                : <NavLink className='addtocart-button' to={'/cart/shopping-cart'}>Go to Cart</NavLink>}
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
        totalDiscount: state.totalDiscount,
        userid: state.userid,
        password: state.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (name) => { dispatch(addToCart(name)) },
        addProduct: (product) => { dispatch(addProduct(product)) },
        addFeedback: (itemname, feedback, username, rating) => { dispatch(addFeedback(itemname, feedback, username, rating)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
