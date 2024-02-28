import React, {useEffect, useState } from "react";  
import { Form, FormControl } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLoginStatus, updateCart, tryathomestate} from '../actions/cartActions';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaHome } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import './Navbar.css';
import logo from './images/logo.jpeg'
import PrimaryNav from "./PrimaryNav";
import { isNumeric } from "jquery";
import axios from "axios";

function NavbarMain({ addedItems, total, totalQuantity, totalDiscount, allItems, uniuserid, email, address, tryoutcart, username, tryathomestate, changeLoginStatus, updateCart }) {
  const [show, handleShow] = useState(false);
  const [resetpassword, setResetPass] = useState(false);
  const [searchkey, setSearchKey] = useState('');
  const [validity, setValidity] = useState('*Please enter valid Mobile number');
  const [menu, toggleMenu] = useState(false);
  const [userid, setUserId] = useState('');
  const [moveup, setMoveUp] = useState(false);
  const [signup, setSignup] = useState(false);
  const [searchresult, setSearchResult] = useState([]);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const logoutAll = () => {
    changeLoginStatus('', '', '')
    updateCart([], 0, 0, 0, []);
    handleShow(false);
    const cookies = new Cookies();
    cookies.set('login-cred', '');
    alert('Successfully Logged Out');
  }

  const changeMethod = (e) => {
    e.preventDefault();
    setSignup(!signup);
  }
  const handleFocus = (e, move) => {
    if (e.target.value === '')
      setMoveUp(move);
  }
  const handleChange = (e) => {
    if (isNumeric(e.target.value) || e.target.value === '') {
      setUserId(e.target.value);
    }
    if (e.target.value.length === 10) {
      document.querySelector('.validity-alert').style.display = "none";
    }
    else {
      setValidity('*Please enter valid Mobile number');
      document.querySelector('.validity-alert').style.display = "block";
    }
  }
  const searchValue = (e) => {
    setSearchKey(e.target.value);

    let currentproduct = allItems;
    let searchedproduct = [];
    searchkey.split(/(?:,| |-)+/).map((searchvalue) => {
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
    setSearchResult(searchedproduct);
  }
  async function submitForm(e) {
    e.preventDefault();
    if (uniuserid == "") {
      var cart = addedItems ? addedItems : [];
      var result;
      if (signup) {
        if (username.value != "") {
          try {
            const { data } = await axios.post('/register', {
              username: username.value, userid, password, cart, total, totalQuantity, totalDiscount, tryoutcart, email, address
            })
            result = data
            if (result.error) {
              document.querySelector('.validity-alert').style.display = "block";
            }
            else {
              document.querySelector('.validity-alert').style.display = "none";
              handleShow(false);
              setResetPass(false);
              alert('Success!!');
            }
            setValidity(result.error)
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
            handleShow(false);
            setResetPass(false);
            changeLoginStatus(result.userid, result.username, result.password)
            updateCart(result.cart, result.total, result.totalQuantity, result.totalDiscount, result.tryoutcart)
            tryathomestate(result.email, result.address)
            const cookies = new Cookies();
            cookies.set('login-cred', result.userid + '=' + result.password)
            alert('Success!!');
          }

          setValidity(result.error)
        }
        catch (error) {
          console.log(error);
        }
      }
    }
    else {
      var oldPassword = oldPassword;
      try {
        await axios.post('/resetpass', {
          userid, password, oldPassword
        })
        handleShow(false);
        setResetPass(false);
        alert('password reseted successfully!!')
      }
      catch (error) {
        console.log(error);
      }
    }

  }
  async function atStartup(){
    window.scrollTo(0, 0);
    const cookies = new Cookies();
    var getCred = cookies.get('login-cred');
    if (getCred !== undefined) {
      var details = getCred.split('=');
      var userid = details[0];
      var result;
      var password = details[1];
      try {
        const { data } =  await axios.post('/login', {
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
          handleShow(false);
          setResetPass(false);
          changeLoginStatus(result.userid,result.username, result.password)
          updateCart(result.cart, result.total, result.totalQuantity, result.totalDiscount, result.tryoutcart)
          tryathomestate(result.email, result.address)
        }

        setValidity(result.error)
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(()=>{   
  atStartup();
  },[])
  return (
    <div className="Top" autoFocus >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 Navbar">
            <div className="logo">
              <NavLink to={'/'}>
                <img src={logo} alt="Company Logo" className="responsive-logo"></img>
              </NavLink>
            </div>
            <div className={"overlay " + (menu ? 'show' : 'hide')}></div>
            <div className={"mobile-menu " + (menu ? 'open-menu' : 'close-menu')} >
              <PrimaryNav></PrimaryNav>
            </div>
            <div className="Search-bar">
              <Form className="Search-form">
                <FormControl onChange={(e) => { searchValue(e) }} value={searchkey} type="text" placeholder="search" className="search-bar" />
                {searchresult.length > 0 && searchkey ? <div className={(searchresult.length ? "show " : "") + "searched-result"}>{searchresult.map((product, key) => { return (<div onClick={() => setSearchKey('')} key={key} className="mb-3"><NavLink className="searched-link" to={product.path}>{product.name}</NavLink></div>) })}</div> : null} <Button className="button"  ><NavLink to={{
                  pathname: 'search',
                  search: '?searchfor=' + searchkey
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
                    <Button variant="primary" onClick={() => handleShow(!show)}>
                      <FaUser className="icon" size="25px" />
                    </Button>

                    {uniuserid === "" ?
                      <Modal size="lg" show={show} aria-labelledby="example-modal-sizes-title-lg" onHide={() => handleShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-lg"><div className="Login-title"><h2>{signup ? "Signup" : "Login"}</h2></div></Modal.Title>
                        </Modal.Header>
                        <Modal.Body><div className="modal-body">

                          <form onSubmit={(e) => submitForm(e)}>
                            <div className={(signup ? 'show ' : 'hide ') + "input-number mb-5"} >
                              <input type="text" ref={(uname) => username = uname} className="username-input"></input>
                              <label className="username-label">Enter UserName</label>

                            </div>
                            <div className={(userid !== '' ? "no-number " : "") + "input-number"}>
                              <span className="country-code">+91</span>
                              <input type="tel" onFocus={(e) => handleFocus(e, true)} onBlur={(e) => handleFocus(e, false)} value={userid} pattern="[0-9]{10}" onChange={(e) => handleChange(e)}></input>
                              <label className={(moveup ? "move " : "") + "number-label"}>Enter Mobile Number:</label>

                            </div>
                            <div className="input-password">
                              <input className="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                              <label className={(moveup ? "move " : "") + "password-label"}>Enter Password:</label>
                            </div>
                            <p className="privacy-terms text-center">By continuing, you agree for our <NavLink onClick={() => { handleShow(false) }} to="TermsCond">Terms of Use</NavLink> and <NavLink onClick={() => { handleShow(false) }} to="Privacy">Privacy policy.</NavLink></p>
                            <div className="modal-footer">
                              <span className="validity-alert">{validity ? validity : ''}</span>

                              <div className={(signup ? "login-buttons " : "signup-button ") + "footer-button"}>
                                <button type="submit" className="login-button w-50">{signup ? "Signup" : "Login"}</button>
                                {signup ? <p className="signup-link text-center">Already a user?,<br /> <button className="link" onClick={(e) => changeMethod(e)}>Login</button></p> : <p className="signup-link text-center">New here?<br /> <button className="link" onClick={(e) => changeMethod(e)}>signup</button></p>}
                              </div>
                            </div>
                          </form>
                        </div>
                        </Modal.Body>
                      </Modal> : <div><div className={(show ? "show " : "close ") + "dropdown-login"}><p>{uniuserid}</p><p onClick={(e) => setResetPass(true)}>Reset Password</p><p onClick={() => logoutAll()}>Logout</p></div>
                        <Modal size="lg" show={resetpassword} aria-labelledby="example-modal-sizes-title-lg" onHide={(e) => setResetPass(false)}>
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg"><div className="Login-title"><h2>Reset Password</h2></div></Modal.Title>
                          </Modal.Header>
                          <Modal.Body><div className="modal-body">
                            <form onSubmit={(e) => submitForm(e)} action="/">
                              <div className="input-password">
                                <input className="password-input" type="password" value={oldPassword} onChange={(e) => { setOldPassword(e.target.value) }}></input>
                                <label className={(moveup ? "move " : "") + "password-label"}>Old Password:</label>
                              </div>
                              <div className="input-password">
                                <input className="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <label className={(moveup ? "move " : "") + "password-label"}>Enter Password:</label>
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
                      <span className="cart-items">{totalQuantity > 0 || tryoutcart.length > 0 ? totalQuantity + tryoutcart.length : null}</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"hamburger-menu " + (menu ? 'open-menu' : 'close-menu')} onClick={(e) => { toggleMenu(!menu) }}>
              <FaBars className="open-icon"></FaBars>
              <MdClose className="close-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    totalQuantity: state.totalQuantity,
    totalDiscount: state.totalDiscount,
    allItems: state.allItems,
    uniuserid: state.userid,
    email: state.email,
    address: state.address,
    tryoutcart: state.tryoutcart,
    username: state.username
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    tryathomestate: (email, dob, address) => { dispatch(tryathomestate(email, dob, address)) },
    changeLoginStatus: (userid, username, password) => { dispatch(changeLoginStatus(userid, username, password)) },
    updateCart: (addedItems, total, totalQuantity, totalDiscount, tryoutcart) => { dispatch(updateCart(addedItems, total, totalQuantity, totalDiscount, tryoutcart)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain)
