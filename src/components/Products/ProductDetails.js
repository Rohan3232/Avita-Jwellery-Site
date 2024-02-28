import React, {useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import './ProductDetails.css';
import { FaExchangeAlt } from "react-icons/fa";
import { addToCart, addProduct, addFeedback } from '../actions/cartActions';
import { MdOutlineVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoSend } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

function ProductDetails({ currentproduct, items, addedItems, userid, username, addToCart, addProduct, addFeedback }) {
    const [feedbackvalue, setFeedbackValue] = useState('');
    const [rating, setRatings] = useState(0);
    const [fdbkexist, togglefdbk] = useState(false);
    const fdbkform=useRef(null);
    const location = useLocation();
    useEffect(()=>{}, [location]);
    const fdbkinput=useRef(null);
    function importAll(r) {
        let carouselImages = {};
        r.keys().forEach((item) => { carouselImages[item.replace('./', '')] = r(item); });
        return carouselImages
    }
    const AddtoCart = (name) => {
        addToCart(name);
        alert('added to Cart!!')
    }

    const setRating = (e) => {
        var rating = 0;
        if (e.target.id != '')
            rating = e.target.id;
        else if (e.target.parentElement.id)
            rating = e.target.parentElement.id;
        setRatings(rating);
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (feedbackvalue != '' && rating > 0) {
            togglefdbk(true);
            addFeedback(currentproduct.name, feedbackvalue, username, rating)
        }
        else {
            alert('please fill all fields')
        }
    }

    const giveFeedback = () => {
        if (userid != '') {
            fdbkform.hidden = false;
            fdbkinput.focus()
        }
        else {
            alert("Please Login first!");
        }
    }

    const updateFeedback = (e) => {
        setFeedbackValue(e.target.value);
    }

    function Offerprice(discount, price) {
        let discountedprice = price - (price * discount / 100);
        return Math.round(discountedprice);
    }

    function updateList() {
        var currentUrl = window.location.pathname;
        currentUrl = currentUrl.slice(10, currentUrl.length).replaceAll('%20', ' ');;
        var urlList = currentUrl.split('/')
        var productList = {}
        items.filter(product => {
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
            addProduct(productList)
    }

    const ProductImages = importAll(require.context('./images/products/', false, /\.(PNG|jpe?g|svg|webp)$/));
    updateList();

    if (currentproduct.id !== undefined) {
        return (<div key={currentproduct.id} className='container details-page'>
            <div className='row'>
                <div className='col-md-5 col-12 product-page'>
                    <div className=' product-image'>
                        {ProductImages[currentproduct.images] ? <div className='image-holder'><img className='w-100 h-auto' src={ProductImages[currentproduct.images]} alt={currentproduct.description} /></div> : null}
                    </div>
                    <div className='offers'><span><GiReturnArrow />15 days Moneyback</span><span><MdOutlineVerified />100% Certified</span><span><FaExchangeAlt></FaExchangeAlt> Lifetime Exchange</span></div>
                </div>
                <div className='col-md-7 col-12 product-details'>
                    <h6 className='product-name'>{currentproduct.name}</h6>
                    <h6 className='title'>Product Details</h6>
                    <p className='desc-text'>{currentproduct.description}</p>
                    <h4 className='price'>₹{currentproduct.discount ? <span>{Offerprice(currentproduct.discount, currentproduct.price)} <span className='old-price'>{currentproduct.price}</span><span className='discount'>-{currentproduct.discount}%off</span></span> : <span>{currentproduct.price}</span>}</h4>
                    <div className='product-descr'>
                        {currentproduct.material != null ? <span><b>Material</b> - {currentproduct.material}</span> : null}
                        {currentproduct.manufacturer != null ? <span><b>Manufacturer</b> - {currentproduct.manufacturer}</span> : null}
                        {currentproduct.metal != null ? <span><b>Metal</b> - {currentproduct.metal}</span> : null}
                        {currentproduct.chainLength != null ? <span><b>Chain Length</b> - {currentproduct.chainLength}</span> : null}

                        {currentproduct.dimensions != null ? <span>
                            {Object.entries(currentproduct.dimensions).map(([index, item]) => {
                                return (
                                    <span key={index}><b>{index}</b>- {item} <br /></span>
                                )
                            })}
                        </span> : null}
                    </div>
                    <div className='product-descr ml-4'>
                        {currentproduct.color != null ? <span><b>Color</b> - {currentproduct.color}</span> : null}
                        {currentproduct.weight != null ? <span><b>Weight</b> - {currentproduct.weight}</span> : null}
                        {currentproduct.gemstone != null ? <span><b>Gemstone</b> - {currentproduct.gemstone}</span> : null}
                        {currentproduct.length != null ? <span><b>Length</b> - {currentproduct.length}</span> : null}
                        {currentproduct.size != null ? <span><b>Size</b> - {currentproduct.size}</span> : null}
                        {currentproduct.design != null ? (typeof (currentproduct.design) != 'string' ? <span>
                            {Object.entries(currentproduct.design).map(([index, item]) => {
                                return (
                                    <span key={index}><b>{index}</b>- {item} <br /></span>
                                )
                            })}
                        </span> : <span><b>Design</b> - {currentproduct.design}</span>) : null}
                        {currentproduct.diamond != null ? <span>
                            {Object.entries(currentproduct.diamond).map(([index, item]) => {
                                return (
                                    <span key={index}><b>{index}</b>- {item} <br /></span>
                                )
                            })}
                        </span> : null}
                    </div>
                    <div className='feedback-section'>
                        <h4 className='title-feedback'>Customer Ratings <button className={fdbkexist ? 'hide' : 'show'} onClick={(e) => { giveFeedback(e) }}> Rate Product</button></h4>

                        {currentproduct.ratings != null ? <span>
                            {currentproduct.ratings.map((item, index) => {
                                return (
                                    <div key={index} style={item.user === userid ? { borderColor: 'green' } : { borderColor: 'black' }} className='customer-feedback'>
                                        <p>{item.comment} <span className='rating'><FaStar />{item.rating}</span></p>
                                        <p><b>- {item.user}</b></p>
                                    </div>
                                )
                            })}
                        </span> : <h6>No Ratings yet</h6>}
                        {!fdbkexist ?
                            <form onSubmit={(e) => { submitForm(e) }} ref={fdbkform} className='feedback-form' hidden>
                                <div className='rating-star' onClick={(e) => setRating(e)}><FaStar color={rating >= 1 ? 'goldenrod' : 'black'} id="1" /><FaStar color={rating >= 2 ? 'goldenrod' : 'black'} id="2" /><FaStar color={rating >= 3 ? 'goldenrod' : 'black'} id="3" /><FaStar color={rating >= 4 ? 'goldenrod' : 'black'} id="4" /><FaStar color={rating >= 5 ? 'goldenrod' : 'black'} id="5" />
                                </div>
                                <div className='d-flex'>
                                    <input value={feedbackvalue} onChange={(e) => { updateFeedback(e) }} type='text' ref={fdbkinput}></input><button type='submit'><IoSend /></button>
                                </div>

                            </form>
                            : null}
                    </div>
                    <div className='addtoCart-section'>
                        {addedItems.indexOf(currentproduct) < 0 ?
                            <button className='addtocart-button' onClick={(e) => { AddtoCart(currentproduct.name) }}>Add to Cart</button>
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
const mapStateToProps = (state) => {
    return {
        currentproduct: state.currentproduct,
        items: state.items,
        addedItems: state.addedItems,
        userid: state.userid,
        username: state.username
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
