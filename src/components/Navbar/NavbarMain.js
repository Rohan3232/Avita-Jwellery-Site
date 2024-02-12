import React, { Component } from "react";
import { Form, FormControl } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLoginStatus, updateCart, tryathomestate, addtotryoutcart } from '../actions/cartActions';
import './Navbar.css';
import logo from './images/logo.jpeg'
import PrimaryNav from "./PrimaryNav";
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
      password: '',
      oldPassword: '',
      resetPassword: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.changeMethod = this.changeMethod.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleOldPassChange = this.handleOldPassChange.bind(this);
    this.changeresetPass = this.changeresetPass.bind(this);
    this.logoutAll = this.logoutAll.bind(this);
  }
  logoutAll() {
    this.props.changeLoginStatus('', '', '')
    this.props.updateCart([], 0, 0, 0, []);
    alert('Successfully Logged Out')
    const cookies = new Cookies();
    this.setState({
      show: false
    })
    cookies.set('login-cred', '');
  }
  async submitForm(e) {

    e.preventDefault();
    if (this.props.userid === "") {
      var userid = this.state.userid;
      var password = this.state.password;
      var cart = this.props.addedItems ? this.props.addedItems : [];
      var total = this.props.total ? this.props.total : 0;
      var totalQuantity = this.props.totalQuantity ? this.props.totalQuantity : 0;
      var totalDiscount = this.props.totalDiscount ? this.props.totalDiscount : 0;
      var result;
      var tryoutcart = this.props.tryoutcart;
      var email = this.props.email;
      var address = this.props.address;
      if (this.state.signup) {
        if (this.username.value != "") {
          try {
            const { data } = await axios.post('/register', {
              username: this.username.value, userid, password, cart, total, totalQuantity, totalDiscount, tryoutcart, email, address
            })
            result = data
            if (result.error) {
              document.querySelector('.validity-alert').style.display = "block";
            }
            else {
              document.querySelector('.validity-alert').style.display = "none";
              this.setState({
                show: false,
                resetPassword: false
              })
              alert('Success!!');
            }

            this.setState({
              validity: result.error
            })
          }
          catch (error) {
            console.log(error);
          }
        }
        else {
          alert("please enter username")
        }
      }
      else {
        try {
          const { data } = await axios.post('/login', {
            userid, password
          }, {
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin': true,
              'Content-Type': 'application/json'
            }
          })
          result = data
          if (result.error) {
            document.querySelector('.validity-alert').style.display = "block";
          }
          else {
            document.querySelector('.validity-alert').style.display = "none";
            this.setState({
              show: false,
              resetPassword: false
            })
            this.props.changeLoginStatus(result.userid, result.username, result.password)
            this.props.updateCart(result.cart, result.total, result.totalQuantity, result.totalDiscount, result.tryoutcart)
            this.props.tryathomestate(result.email, result.address)
            const cookies = new Cookies();
            cookies.set('login-cred', result.userid + '=' + result.password)
            alert('Success!!');
          }

          this.setState({
            validity: result.error
          })
        }
        catch (error) {
          console.log(error);
        }
      }
    }
    else {
      var oldPassword = this.state.oldPassword;
      try {
        await await axios.post('/resetpass', {
          userid, password, oldPassword
        })
        this.setState({
          show: false,
          resetPassword: false
        })
        alert('password reseted successfully!!')
      }
      catch (error) {
        console.log(error);
      }
    }

  }
  formSubmit(e) {
    if (this.state.userid.length === 10) {
      document.querySelector('.validity-alert').style.display = "none";
    }
    else {
      this.setState({
        validity: '*Please enter valid Mobile number'
      })
      document.querySelector('.validity-alert').style.display = "block";
    }
  }
  changeMethod(e) {
    e.preventDefault();
    this.setState(prevState => ({ signup: !prevState.signup }))
  }
  handleFocus(e, move) {
    if (e.target.value === '')
      this.setState({
        moveup: move
      })
  }
  handlePassChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleOldPassChange(e) {
    this.setState({
      oldPassword: e.target.value
    })
  }
  handleChange(e) {
    if (isNaN(e.target.value) || e.target.value === '') {
      this.setState({
        userid: e.target.value
      })
    }
    if (e.target.value.length === 10) {
      document.querySelector('.validity-alert').style.display = "none";
    }
    else {
      this.setState({
        validity: '*Please enter valid Mobile number'
      })
      document.querySelector('.validity-alert').style.display = "block";
    }
  }
  changeresetPass() {
    this.setState({
      resetPassword: true
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
      if (searchedproduct.length !== 0) {
        currentproduct = searchedproduct;
        searchedproduct = [];
      }
      currentproduct.map((product, key) => {
        let flg = 0;
        for (let p in product) {
          let search = product[p];
          if ((typeof search === 'string' && ((search.toLocaleLowerCase()).includes(searchvalue.toLocaleLowerCase()))))
            flg = 1;
        }
        if (flg === 1)
          searchedproduct.push(product);
        return 0
      })
      return 0;
    })
    this.setState({
      searchresult: searchedproduct
    })
  }
  async componentDidMount() {
    window.scrollTo(0, 0);
    const cookies = new Cookies();
    var getCred = cookies.get('login-cred');
    if (getCred !== undefined) {
      var details = getCred.split('=');
      var userid = details[0];
      var result;
      var password = details[1];
      try {
        const { data } = await axios.post('/login', {
          userid, password
        }, {
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json'
          }
        })
        result = data
        if (result.error) {
        }
        else {
          this.setState({
            show: false,
            resetPassword: false
          })
          this.props.changeLoginStatus(result.userid, result.username, result.password)
          this.props.updateCart(result.cart, result.total, result.totalQuantity, result.totalDiscount, result.tryoutcart)
          this.props.tryathomestate(result.email, result.address)
        }

        this.setState({
          validity: result.error
        })
      }
      catch (error) {
        console.log(error);
      }
    }

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
        resetPassword: false
      })
    }
    const handleShow = () => {
      if (this.state.show === false) {
        this.setState({
          show: true
        })
      } else {
        this.setState({
          show: false
        })
      }
    }
    const clearSearch = (e) => {
      this.setState({
        searchkey: ''
      })

    }
    return (
      <div className="Top" autoFocus >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 Navbar">
              <div className="logo">
                <NavLink to={'/'}>
                  <img loading="lazy" src={logo} alt="Company Logo" className="responsive-logo"></img>
                </NavLink>
              </div>
              <div className={"overlay " + (this.state.menuToggleClass ? 'show' : 'hide')}></div>
              <div className={"mobile-menu " + (this.state.menuToggleClass ? 'open-menu' : 'close-menu')} >
                <PrimaryNav></PrimaryNav>
              </div>
              <div className="Search-bar">
                <Form className="Search-form">
                  <FormControl onChange={(e) => { this.searchValue(e) }} value={this.state.searchkey} type="text" placeholder="search" className="search-bar" />
                  {this.state.searchresult.length > 0 && this.state.searchkey ? <div className={(this.state.searchresult.length ? "show " : "") + "searched-result"}>{this.state.searchresult.map((product, key) => { return (<div onClick={(e) => { clearSearch(e) }} key={key} className="mb-3"><NavLink className="searched-link" to={product.path}>{product.name}</NavLink></div>) })}</div> : null} <Button className="button"  ><NavLink to={{
                    pathname: 'search',
                    search: '?searchfor=' + this.state.searchkey
                  }}>
                    <span style={{ color: 'white' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </span>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi icon bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                      </Button>

                      {this.props.userid === "" ?
                        <Modal size="lg" show={this.state.show} aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg"><div className="Login-title"><h2>{this.state.signup ? "Signup" : "Login"}</h2></div></Modal.Title>
                          </Modal.Header>
                          <Modal.Body><div className="modal-body">

                            <form onSubmit={(e) => this.submitForm(e)}>
                              <div className={(this.state.signup ? 'show ' : 'hide ') + "input-number mb-5"} >
                                <input type="text" ref={(uname) => this.username = uname} className="username-input"></input>
                                <label className="username-label">Enter UserName</label>

                              </div>
                              <div className={(this.state.userid !== '' ? "no-number " : "") + "input-number"}>
                                <span className="country-code">+91</span>
                                <input type="tel" onFocus={(e) => this.handleFocus(e, true)} onBlur={(e) => this.handleFocus(e, false)} value={this.state.userid} pattern="[0-9]{10}" onChange={(e) => this.handleChange(e)}></input>
                                <label className={(this.state.moveup ? "move " : "") + "number-label"}>Enter Mobile Number:</label>

                              </div>
                              <div className="input-password">
                                <input className="password-input" type="password" value={this.state.password} onChange={(e) => this.handlePassChange(e)}></input>
                                <label className={(this.state.moveup ? "move " : "") + "password-label"}>Enter Password:</label>
                              </div>
                              <p className="privacy-terms text-center">By continuing, you agree for our <NavLink onClick={() => { this.setState({ show: false }) }} to="TermsCond">Terms of Use</NavLink> and <NavLink onClick={() => { this.setState({ show: false }) }} to="Privacy">Privacy policy.</NavLink></p>
                              <div className="modal-footer">
                                <span className="validity-alert">{this.state.validity ? this.state.validity : ''}</span>

                                <div className={(this.state.signup ? "login-buttons " : "signup-button ") + "footer-button"}>
                                  <button type="submit" className="login-button w-50">{this.state.signup ? "Signup" : "Login"}</button>
                                  {this.state.signup ? <p className="signup-link text-center">Already a user?,<br /> <button className="link" onClick={(e) => this.changeMethod(e)}>Login</button></p> : <p className="signup-link text-center">New here?<br /> <button className="link" onClick={(e) => this.changeMethod(e)}>signup</button></p>}
                                </div>
                              </div>
                            </form>
                          </div>
                          </Modal.Body>
                        </Modal> : <div><div className={(this.state.show ? "show " : "close ") + "dropdown-login"}><p>{this.props.userid}</p><p onClick={this.changeresetPass}>Reset Password</p><p onClick={this.logoutAll}>Logout</p></div>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Cart/shopping-cart" className="navlink">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi icon bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                          </svg>
                        </span>
                        <span className="cart-items">{this.props.totalQuantity > 0 || this.props.tryoutcart.length > 0 ? this.props.totalQuantity + this.props.tryoutcart.length : null}</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"hamburger-menu " + (this.state.menuToggleClass ? 'open-menu' : 'close-menu')} onClick={this.menuToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list open-icon" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg close-icon" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
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
    totalDiscount: state.totalDiscount,
    allItems: state.allItems,
    userid: state.userid,
    password: state.password,
    email: state.email,
    address: state.address,
    tryoutcart: state.tryoutcart,
    username: state.username
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tryathomestate: (email, dob, address) => { dispatch(tryathomestate(email, dob, address)) },
    addtotryoutcart: (name) => { dispatch(addtotryoutcart(name)) },
    changeLoginStatus: (userid, username, password) => { dispatch(changeLoginStatus(userid, username, password)) },
    updateCart: (addedItems, total, totalQuantity, totalDiscount, tryoutcart) => { dispatch(updateCart(addedItems, total, totalQuantity, totalDiscount, tryoutcart)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain)
