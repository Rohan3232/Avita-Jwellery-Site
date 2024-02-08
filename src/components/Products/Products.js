import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';
import { addToCart, addProduct,addtotryoutcart,tryathomestate } from '../actions/cartActions';
import { NavLink } from 'react-router-dom';
class Bangles extends Component {
  constructor(props) {
    super(props);
    this.Offerprice = this.Offerprice.bind(this);
  }
  Offerprice(discount, price) {
    let discountedprice = price - (price * discount / 100)
    return discountedprice;
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
  render() {
    function importAll(r) {
      let carouselImages = {};
      r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
      return carouselImages
    }
    const ProductImages = importAll(require.context('./images/products/', false, /\.(PNG|jpe?g|svg|webp)$/))
    var currentUrl = window.location.pathname;
    currentUrl = currentUrl.slice(10, currentUrl.length)
    const itemspath = currentUrl.split('/');
    let currentproduct = this.props.items.filter(item => {
      return (itemspath[0] == item.title || itemspath[0] == 'Offers');
    }).map((item, key) => {
      return (
        <div className='row' key={key}>
          <div className='col-xs-12'>
            {itemspath[0] == 'Offers' ? null : <h1 className='page-title'>{item.title}</h1>}
          </div>
          {item.types ? <div className='col-xs-12'>
            {item.types.filter(type => {
              return (itemspath[1] == undefined || itemspath[1].replace('%20', ' ').indexOf(type.name) >= 0)
            }).map((type, key) => {
              {
                return (
                  <div className='row' key={key}><div className='col-12'>
                    {itemspath[0] == 'Offers' ? <h2 className='title'>Offers on {type.name}</h2> : <h2 className='title'>{type.name}</h2>}
                  </div>
                    <div className='col-xs-12'><div className='row'>
                      {
                        item[type.name.replaceAll(' ', '')].filter(product => {
                          if (itemspath != 'Offers')
                            return true
                          else
                            return product.discount
                        }).map((product, key) => {
                          return (
                            <div key={key} className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 cards-holder'>
                              <NavLink className="product-link" to={item.path + '/' + type.name + '/' + product.name}>
                                <div className=' product-cards'>
                                  {ProductImages[product.images] ? <div className='image-holder'><img className='h-auto' src={ProductImages[product.images]} alt={product.description} /></div> : null}
                                  <h6 className='product-name'>{product.name}</h6>
                                  <h6 className='price'>₹{product.discount ? <span>{this.Offerprice(product.discount, product.price)} <span className='old-price'>{product.price}</span><span className='discount'>-{product.discount}%off</span></span> : <span>{product.price}</span>}</h6>
                                 
                                </div>
                              </NavLink>
                              
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
        <div className='container-fluid products-holder'>
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
    currentproduct: state.currentproduct,
    tryoutcart:state.tryoutcart,
    tryathome:state.tryathome
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    addProduct: (product) => { dispatch(addProduct(product)) },
    addtotryoutcart:(name) =>{dispatch(addtotryoutcart(name))},
    tryathomestate:(tryathome)=>{dispatch(tryathomestate(tryathome))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bangles)