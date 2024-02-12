import React, { Component } from 'react'
import { connect } from 'react-redux';
import './ProductDetails.css';
import { addToCart, addProduct, addFeedback } from '../actions/cartActions';
import { NavLink } from 'react-router-dom';
import { FaExchangeAlt } from "fa";
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
            this.props.addFeedback(this.props.currentproduct.name, this.state.feedbackvalue, this.props.username, this.state.rating)
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
        console.log(this.props)
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
                            {ProductImages[this.props.currentproduct.images] ? <div className='image-holder'><img loading="lazy" className='w-100 h-auto' src={ProductImages[this.props.currentproduct.images]} alt={this.props.currentproduct.description} /></div> : null}

                        </div>
                        <div className='offers'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg>15 days Moneyback</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>100% Certified</span><span><FaExchangeAlt></FaExchangeAlt> Lifetime Exchange</span></div>

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
                                    return (
                                        <div key={index} style={item.user === this.props.userid ? { borderColor: 'green' } : { borderColor: 'black' }} className='customer-feedback'>
                                            <p>{item.comment} <span className='rating'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>{item.rating}</span></p>
                                            <p><b>- {item.user}</b></p>
                                        </div>
                                    )
                                })}
                            </span> : null}
                            {!this.state.alreadygivenfbk ?
                                <form onSubmit={(e) => { this.submitForm(e) }} ref={(ff) => this.fdbkform = ff} className='feedback-form' hidden>
                                    <div className='rating-star' onClick={(e) => this.setRating(e)}>
                                        <svg color={this.state.rating >= 1 ? 'goldenrod' : 'black'} id="1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg color={this.state.rating >= 2 ? 'goldenrod' : 'black'} id="2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg color={this.state.rating >= 3 ? 'goldenrod' : 'black'} id="3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg color={this.state.rating >= 4 ? 'goldenrod' : 'black'} id="4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg color={this.state.rating >= 5 ? 'goldenrod' : 'black'} id="5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex'>
                                        <input value={this.state.feedbackvalue} onChange={(e) => { this.updateFeedback(e) }} type='text' ref={(fi) => this.fdbkinput = fi}></input><button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg></button>
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
        password: state.password,
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
