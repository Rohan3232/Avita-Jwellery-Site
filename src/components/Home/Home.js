import React, { Component } from 'react'
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.addLink = this.addLink.bind(this);
    }

    addLink(key) {
        var currentproduct = this.props.items.filter(item => {
            if (item.id === key) {
                return item;
            }
            return false
        })
        if (currentproduct[0])
            return currentproduct[0].path;
        else
            return 0
    }
    render() {
        function importAll(r) {
            let carouselImages = {};
            r.keys().forEach((item, index) => { carouselImages[item.replace('./', '')] = r(item); });
            return carouselImages
        }
        const carouselImages = importAll(require.context('./images/carousel', false, /\.(PNG|jpe?g|svg)$/));
        const thumbnailsImages = importAll(require.context('./images/thumbnails', false, /\.(PNG|jpe?g|svg)$/));
        const collectionsImages = importAll(require.context('./images/collections', false, /\.(PNG|jpe?g|svg|webp)$/));
        return (
            <div className="app">
                <Carousel>
                    {Object.keys(carouselImages).map((index, key) => {
                        return (
                            <Carousel.Item key={key}>
                                <NavLink to={{
                                    pathname: 'Collection/' + index.split('.')[0]
                                }}>
                                    <img src={carouselImages[index]} alt={index.split('.')[0]} style={{ width: "100%" }}></img>
                                </NavLink></Carousel.Item>)
                    })}
                </Carousel>
                <div className='container-fluid'>
                    <div className="cards-thumbnails row">
                        {Object.keys(thumbnailsImages).map((index, key) => {
                            return (<div className="col-lg-4 card" key={key}><NavLink to={this.addLink(key)}>
                                <img src={thumbnailsImages[index]} className="card-img-top" alt="card1"></img></NavLink>
                            </div>)
                        })}
                    </div>
                    <div className="cards-collection row">
                        {Object.keys(collectionsImages).map((index, key) => {
                            return (<div key={key} className="col-lg-12 card" ><NavLink to='/products/Offers'>
                                <img src={collectionsImages[index]} className="card-img-top" alt="card1"></img>
                            </NavLink></div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        currentproduct: state.currentproduct
    }
}
export default connect(mapStateToProps)(Home)
