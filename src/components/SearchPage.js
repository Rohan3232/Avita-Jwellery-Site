import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addProduct } from './actions/cartActions';
import { NavLink } from 'react-router-dom';
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flg: false
    }
    this.Offerprice = this.Offerprice.bind(this);
  }
  Offerprice(discount, price) {
    let discountedprice = price - (price * discount / 100)
    return discountedprice;
  }
  render() {
    function importAll(r) {
      let carouselImages = {};
      r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
      return carouselImages
    }
    const ProductImages = importAll(require.context('./Products/images/products/', false, /\.(PNG|jpe?g|svg|webp)$/))

    var currentUrl = window.location.pathname;
    var searchkey;
    currentUrl = currentUrl.slice(1, currentUrl.length);
    const itemspath = currentUrl.split('/');
    if (itemspath[0] !== 'search') {
      if (itemspath[0] === "Collection")
        searchkey = itemspath[itemspath.length - 1].split(/(?:,| |-)+/);
      else
        searchkey = this.props.searchkey.split(/(?:,| |-)+/);
    }
    else {
      const searchParams = new URLSearchParams(document.location.search)
      searchkey = searchParams.get('searchfor').split(/(?:,| |-)+/);
    }
    let currentproduct = this.props.allItems;
    let searchedproduct = [];
    searchkey.map((searchvalue) => {
      if (searchedproduct.length !== 0 && searchvalue !== 'collection') {
        currentproduct = searchedproduct;
        searchedproduct = [];
      }
      else if (searchedproduct.length === 0)
        currentproduct = this.props.allItems;
      currentproduct.map((product, key) => {
        let flg = 0;
        for (let p in product) {
          let search = product[p];
          if ((typeof search === 'string' && ((search.toLocaleLowerCase()).includes(searchvalue.toLocaleLowerCase()))) || (typeof search ==='number' && p.includes(searchvalue) && search > 10))
            flg = 1;
        }
        if (flg === 1)
          searchedproduct.push(<div key={searchedproduct.length} className='col-lg-3 col-md-6 col-sm-6 col-12 cards-holder'>
            <NavLink className="product-link" to={product.path}>
              <div className=' product-cards'>
                {ProductImages[product.images] ? <div className='image-holder'><img className='h-auto' src={ProductImages[product.images]} alt={product.description} /></div> : null}
                <h6 className='product-name'>{product.name}</h6>
                <h6 className='price'>₹{product.discount ? <span>{this.Offerprice(product.discount, product.price)} <span className='old-price'>{product.price}</span><span className='discount'>-{product.discount}%off</span></span> : <span>{product.price}</span>}</h6>
              </div>
            </NavLink>
          </div>);
          return 0;
      })
      return 0;
    })

    if (searchedproduct.length > 0) {
      return (
        <div className='container-fluid products-holder'>
          <div className='row'>
            <h1 className='title'>{this.props.searchkey ? "Here are some suggestions:" : "Our Collection"}</h1>
            {searchedproduct}</div></div >
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
    allItems: state.allItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    addProduct: (product) => { dispatch(addProduct(product)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)