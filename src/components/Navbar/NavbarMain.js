import React, { Component } from "react";
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLoginStatus, updateCart } from '../actions/cartActions';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaHome } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import './Navbar.css';
import logo from './images/logo.jpeg'
import PrimaryNav from "./PrimaryNav";
import { isNumeric } from "jquery";
import axios from "axios";
class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggleClass: false,
      searchToggleClass: false,
      currentUrl: window.location.pathname,
      userid: '',
      show: false,
      moveup: false,
      signup: false,
      searchkey: '',
      searchresult: [],
      validity: '*Please enter valid Mobile number',
      password:'',
      oldPassword:'',
      resetPassword:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.changeMethod = this.changeMethod.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handlePassChange=this.handlePassChange.bind(this);
    this.handleOldPassChange=this.handleOldPassChange.bind(this);
    this.changeresetPass=this.changeresetPass.bind(this);
    this.logoutAll=this.logoutAll.bind(this);
  }
  logoutAll(){
    this.props.changeLoginStatus('','')
    this.props.updateCart([],0,0,0);
  }
  async submitForm(e) {
    
    e.preventDefault();
    if(this.props.userid==""){
    var userid = this.state.userid;
    var password = this.state.password;
    var cart=this.props.addedItems?this.props.addedItems:[];
    var total=this.props.total?this.props.total:0;
    var totalQuantity=this.props.totalQuantity?this.props.totalQuantity:0;
    var totalDiscount=this.props.totalDiscount?this.props.totalDiscount:0;
    var result;
    
      if (this.state.signup) {
        try {        
      const {data} = await axios.post('/register', {
          userid,password,cart,total,totalQuantity,totalDiscount
        })
        result=data
        if (result.error) {
          document.querySelector('.validity-alert').style.display = "block";
        }
        else {
          document.querySelector('.validity-alert').style.display = "none";
          this.setState({
            show:false,
            resetPassword:false
          })
          alert('Success!!');
        }
           
      this.setState({
        validity: result.error
      })
        }
        catch(error){
          console.log(error);
        }
      }
      else{
        try{
        const {data} = await axios.post('/login', {
          userid,password,cart,total,totalQuantity,totalDiscount
        },{
          withCredentials: false,
          headers: {
              'Access-Control-Allow-Origin': true, 
              'Content-Type': 'application/json'
          }
      })
        result=data
        if (result.error) {
          document.querySelector('.validity-alert').style.display = "block";
        }
        else {
          document.querySelector('.validity-alert').style.display = "none";
          this.setState({
            show:false,
            resetPassword:false
          })
          this.props.changeLoginStatus(result.userid,result.password)
          this.props.updateCart(result.cart,result.total,result.totalQuantity,result.totalDiscount)
          alert('Success!!');
        }
           
      this.setState({
        validity: result.error
      })
    }
    catch(error){
      console.log(error);
    }
      }
  }
  else{
    var oldPassword=this.state.oldPassword;
    var password=this.state.password;
    var userid=this.props.userid;
    try {
    const {data} = await axios.post('/resetpass', {
      userid,password,oldPassword
    })
    this.setState({
      show:false,
      resetPassword:false
    })
    alert('password reseted successfully!!')
     }
    catch (error) {
      console.log(error);
    }
  }
  
  }
  formSubmit(e) {
    if (this.state.userid.length == 10) {
      document.querySelector('.validity-alert').style.display = "none";
    }
    else {
      this.setState({
        validity: '*Please enter valid Mobile number'
      })
      document.querySelector('.validity-alert').style.display = "block";
    }
  }
  changeMethod() {
    this.setState(prevState => ({ signup: !prevState.signup }))
  }
  handleFocus(e, move) {
    if (e.target.value == '')
      this.setState({
        moveup: move
      })
  }
  handlePassChange(e){
    this.setState({
      password: e.target.value
    })
  }
  handleOldPassChange(e){
    this.setState({
      oldPassword: e.target.value
    })
  }
  handleChange(e) {
    if (isNumeric(e.target.value) || e.target.value == '') {
      this.setState({
        userid: e.target.value
      })
    }
    if (e.target.value.length == 10) {
      document.querySelector('.validity-alert').style.display = "none";
    }
    else {
      this.setState({
        validity: '*Please enter valid Mobile number'
      })
      document.querySelector('.validity-alert').style.display = "block";
    }
  }
  changeresetPass(){
    this.setState({
      resetPassword:true
    })
  }
  menuToggle() {
    this.setState({
      menuToggleClass: !this.state.menuToggleClass
    })
  }
  searchToggle() {
    this.setState({
      searchToggleClass: !this.state.searchToggleClass
    })
  }
  searchValue(e) {
    this.setState({
      searchkey: e.target.value
    })

    let currentproduct = this.props.allItems;
    let searchedproduct = [];
    this.state.searchkey.split(/(?:,| |-)+/).map((searchvalue) => {
      if (searchedproduct.length != 0) {
        currentproduct = searchedproduct;
        searchedproduct = [];
      }
      currentproduct.map((product, key) => {
        let flg = 0;
        for (let p in product) {
          let search = product[p];
          if ((typeof search == 'string' && ((search.toLocaleLowerCase()).includes(searchvalue.toLocaleLowerCase()))))
            flg = 1;
        }
        if (flg == 1)
          searchedproduct.push(product);
      })
    })
    this.setState({
      searchresult: searchedproduct
    })
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
  render() {
    const handleClose = () => {
      this.setState({
        show: false,
        resetPassword:false
      })
    }
    const handleShow = () => {
      if(this.state.show==false){
      this.setState({
        show: true
      })
    }else{
      this.setState({
        show: false
      })
    }
    }
    const clearSearch= (e) =>{
      this.setState({
        searchkey:''
      })

    }
    
    return (
      <div className="Top" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 Navbar">
              <div className="logo">
                <NavLink to={'/'}>
                  <img src={logo} alt="Company Logo" className="responsive-logo"></img>
                </NavLink>
              </div>
              <div className={"overlay " + (this.state.menuToggleClass ? 'show' : 'hide')}></div>
              <div className={"mobile-menu " + (this.state.menuToggleClass ? 'open-menu' : 'close-menu')} >
                <PrimaryNav></PrimaryNav>
              </div>
              <div className="Search-bar">
                <Form className="Search-form">
                  <FormControl onChange={(e) => { this.searchValue(e) }} value={this.state.searchkey} type="text" placeholder="search" className="search-bar" />
                  {this.state.searchresult.length>0 && this.state.searchkey ? <div className={(this.state.searchresult.length?"show ":"")+"searched-result"}>{this.state.searchresult.map((product, key) => { return (<div onClick={(e)=>{clearSearch(e)}}  key={key} className="mb-3"><NavLink className="searched-link" to={product.path}>{product.name}</NavLink></div>) })}</div> : null} <Button className="button"  ><NavLink to={{
                    pathname: 'search',
                    search: '?searchfor=' + this.state.searchkey
                  }}>
                    <span style={{ color: 'white' }}><FaSearch size="20px" /></span>
                  </NavLink>
                  </Button>
                </Form>

                <div>
                </div>
              </div>
              <div className="links">
                <div className="link" >
                  <ul className="sidebar">
                    <li className="login-modal navlink">
                      <Button variant="primary" onClick={handleShow}>
                        <FaUser className="icon" size="25px" />
                      </Button>
                      
            { this.props.userid==""?
            <Modal size="lg" show={this.state.show} aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg"><div className="Login-title"><h2>{this.state.signup ? "Signup" : "Login"}</h2></div></Modal.Title>
              </Modal.Header>
              <Modal.Body><div className="modal-body">
               
                <form onSubmit={(e) => this.submitForm(e)} action="/">
                  <div className={(this.state.userid != '' ? "no-number " : "") + "input-number"}>
                    <label className={(this.state.moveup ? "move " : "") + "number-label"}>Enter Mobile Number:</label>
                    <span className="country-code">+91</span>
                    <input type="tel" onFocus={(e) => this.handleFocus(e, true)} onBlur={(e) => this.handleFocus(e, false)} value={this.state.userid} pattern="[0-9]{10}" onChange={(e) => this.handleChange(e)}></input>
                    <span className="validity-alert">{this.state.validity ? this.state.validity : ''}</span>
                  </div>
                  <div className="input-password">
                     <input className="password-input" type="password" value={this.state.password} onChange={(e) => this.handlePassChange(e)}></input>
                     <label className={(this.state.moveup ? "move " : "") + "password-label"}>Enter Password:</label>
                
                  </div>
                  <p className="privacy-terms text-center">By continuing, you agree for our <NavLink onClick={()=>{this.setState({show:false})}} to="TermsCond">Terms of Use</NavLink> and <NavLink onClick={()=>{this.setState({show:false})}} to="Privacy">Privacy policy.</NavLink></p>
                  <div className="modal-footer">
                    <div className={(this.state.signup ? "login-buttons " : "signup-button ") + "footer-button"}>
                      <button type="submit" className="login-button w-50" onClick={(e) => this.formSubmit(e)}>{this.state.signup ? "Signup" : "Login"}</button>
                      {this.state.signup ? <p className="signup-link text-center">Already a user, <a className="link" onClick={(e) => this.changeMethod()}>Login</a></p> : <p className="signup-link text-center">New here?<br/> <a className="link" onClick={(e) => this.changeMethod()}>signup</a></p>}
                    </div>
                  </div>
                </form>
              </div>
              </Modal.Body>
            </Modal>:<div><div className={(this.state.show?"show ":"close ")+"dropdown-login"}><p>{this.props.userid}</p><p onClick={this.changeresetPass}>Reset Password</p><p onClick={this.logoutAll}>Logout</p></div>
            <Modal size="lg" show={this.state.resetPassword} aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg"><div className="Login-title"><h2>Reset Password</h2></div></Modal.Title>
              </Modal.Header>
              <Modal.Body><div className="modal-body">
                <form onSubmit={(e) => this.submitForm(e)} action="/">
                <div className="input-password">
                     <input className="password-input" type="password" value={this.state.oldPassword} onChange={(e) => this.handleOldPassChange(e)}></input>
                     <label className={(this.state.moveup ? "move " : "") + "password-label"}>Old Password:</label>
                  </div>
                  <div className="input-password">
                     <input className="password-input" type="password" value={this.state.password} onChange={(e) => this.handlePassChange(e)}></input>
                     <label className={(this.state.moveup ? "move " : "") + "password-label"}>Enter Password:</label>
                  </div>
                  <div className="modal-footer">
                    <div className="login-buttons footer-button">
                      <button type="submit" className="login-button w-50">Reset Password</button>
                    </div>
                  </div>
                </form>
              </div>
              </Modal.Body>
            </Modal></div>
            }
                    </li>
                    <li>
                      <NavLink to="/TryAtHome" className="navlink">
                        <FaHome size="25"></FaHome>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Cart/shopping-cart" className="navlink">
                        <span>
                          <FaShoppingCart className="icon" size="25px" />
                        </span>
                        <span className="cart-items">{this.props.totalQuantity > 0 || this.props.tryoutcart.length>0 ? this.props.totalQuantity+this.props.tryoutcart.length : null}</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"hamburger-menu " + (this.state.menuToggleClass ? 'open-menu' : 'close-menu')} onClick={this.menuToggle}>
                <FaBars className="open-icon"></FaBars>
                <MdClose className="close-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    allItems: state.allItems,
    userid:state.userid,
    password:state.password,
    tryoutcart:state.tryoutcart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginStatus: (userid,password) => { dispatch(changeLoginStatus(userid,password)) },
    updateCart:(addedItems,total,totalQuantity,totalDiscount)=>{dispatch(updateCart(addedItems,total,totalQuantity,totalDiscount))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain)
