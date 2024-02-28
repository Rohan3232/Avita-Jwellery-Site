import axios from 'axios';
import React, { useState } from 'react'
import './ContactUs.css';
import { NavLink } from 'react-bootstrap';

export default function ContactUs() {
    const [errorm1, setErrorm1] = useState('');
    const [errorm2, setErrorm2] = useState('');
    const [errorm3, setErrorm3] = useState('');
    const [nm, setName] = useState('');
    const [email, setMail] = useState('');
    const [remarks, setRemarks] = useState('');
    const [mob, setMob] = useState('');

    const myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "mob") {
            if (!val.match(/^\d{10}$/)) {
                setErrorm1(<strong style={{ color: "red" }}>Mobile Number Must Contain Only 10 Digits</strong>);
            }
            else
                setMob(val);
        }
        else if (nam === "nm") {
            if (val === "") {
                setErrorm2(<strong style={{ color: "red" }}>Name Should not be blank</strong>);
            }
            else
                setName(val);
        }
        else if (nam === "email") {
            if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
                setErrorm3(<strong style={{ color: "red" }}>Email must follow characters@characters.domain order</strong>);
            }
            else
                setMail(val);
        }
        else if (nam == "remarks")
            setRemarks(val);
    }

    const submitEmail = (e) => {

        var data = {
            nm: nm,
            email: email,
            remarks: remarks,
            mob: mob

        }
        if (errorm1 !== '' || errorm2 !== "" || errorm3 !== "") {
            alert("please enter valid data");
        }
        else {
            axios.post('/sendContact', data)
                .then(function (response) {
                    alert('your response recorded Successfully!!!');
                    resetForm();
                })
                .catch(function (error) {
                    console.log(error)
                });
        }

    }
    function resetForm() {
        setMail('');
        setName('');
        setMob('');
        setRemarks('');
    }

    return (
        <div className='contactus-section'>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-6 col-12" >
                        <form method="post" className="form1 pull-right validate bg-white">
                            <div className="form-outline mb-4" style={{ marginTop: "10px" }}>
                                <label className="form-label" htmlFor="form4Example1">Name</label>
                                <input type="text" name="nm" id="form4Example1" className="form-control" onChange={(e) => { myChangeHandler(e) }} />
                                <p>{errorm2}</p>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form4Example2">Email address</label>
                                <input type="email" name="email" id="form4Example2" className="form-control" onChange={(e) => { myChangeHandler(e) }} />
                                <p>{errorm3}</p>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form4Example4">Mobile Number</label>
                                <input type="tel" name="mob" id="form4Example4" className="form-control" onChange={(e) => { myChangeHandler(e) }} />
                                <p>{errorm1}</p>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form4Example3">Remark</label>
                                <textarea className="form-control" onChange={(e) => { myChangeHandler(e) }} name="remarks" id="form4Example3" rows="4"></textarea>

                            </div>

                            <br></br>
                            <input className="btn btn-primary btn-block mb-4" value="SUBMIT" onClick={submitEmail} style={{ width: "100%" }} />
                            <br></br>
                        </form>
                    </div>

                    <div className='col-lg-6 col-12'>
                        <iframe title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121035.86684761179!2d73.7764778066407!3d18.557312683860314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe5b036291d%3A0xcb8abc91bdca4c48!2sLTI!5e0!3m2!1sen!2sin!4v1609492504579!5m2!1sen!2sin" style={{ border: "0px" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        <div className='address-details bg-white'>
                            <div className='f50'>
                                <p><b>24x7 Enquiry Support(All Days)</b></p>
                                <p><b>General :</b> <a href='mailto:Contactus@avitajwellery.com'>Contactus@avitajwellery.com</a></p>
                                <p><b>Corporate :</b> <a href='mailto:B2B@avitajwellery.com'>B2B@avitajwellery.com</a></p>
                                <p><b>HR : </b> <a href='mailto:Careers@avitajwellery.com'>Careers@avitajwellery.com</a></p>
                                <p className='d-flex'><b>Grievance : </b><NavLink className='link' to={'/privacypolicy'}>Click here</NavLink></p>
                            </div>
                            <div className='f50'> <div className=' d-flex'><p><b>Address: </b> </p><p>LTIMindtree,
                                BLUE RIDGE, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057</p></div>
                                <p><b>Contact no : </b> 022-429351001 </p><p><b>Time : </b>9.30am to 6.30pm (all working days)</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

