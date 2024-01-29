import axios from 'axios';
import React, { Component } from 'react'

import './ContactUs.css';
export class ContactUs extends Component {
   constructor(props)
     {
        super(props);
        this.state = {
        nm: '',
        email:'',
        mob: null,
        errorm1: '',
        errorm2: '',
        errorm3: ''
        
        };
        this.myChangeHandler=this.myChangeHandler.bind(this);
        this.submitEmail=this.submitEmail.bind(this);
     }
     myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err1 = '';
      let err2 = '';
      let err3 = '';
      
      
      if (nam === "mob") 
      {
          if (!val.match(/^\d{10}$/)) 
          {
          err1 = <strong style={{color:"red"}}>Mobile Number Must Contain Only 10 Digits</strong>;
          }
      }
      if (nam === "nm") 
      {
          if (val=="" ) 
          {
          err2 = <strong style={{color:"red"}}>Name Should not be blank</strong>;
          }
      }
      if (nam === "email") 
      {
          if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) 
          {
          err3 = <strong style={{color:"red"}}>Email must follow characters@characters.domain order</strong>;
          }
      }
      this.setState({errorm1: err1});
      this.setState({errorm2: err2});
      this.setState({errorm3: err3});
      this.setState({[nam]: val});
  }

  submitEmail=(e)=>{
  
   var data={ nm: this.state.nm,
              email:this.state.email,
              mob: this.state.mob,

   }
   if(this.state.errorm1!=''||this.state.errorm2!=""||this.state.errorm3!="")
{
    alert("please enter valid data");
}
else{
   axios.post('http://localhost:3001/send',data)
    .then(function(response) {
        alert('your response recorded Successfully!!!');
    })
    .catch(function (error) {
        console.log(error)
    });
}

}
resetForm(){
   this.setState({nm: '', email: '',mob:null, errorm1: '',errorm2: '',errorm3: ''})
}  

    render() {
        return (
            <div className="container" style={{border:"2px solid grey",marginTop:"20px"}} >
                <div className="child1" >
                <form  method="post" className="form1 pull-right validate">
              <div className="form-outline mb-4" style={{marginTop:"10px"}}>
                   <label className="form-label" for="form4Example1">Name</label>
                   <input type="text" name="nm" id="form4Example1" className="form-control" onChange={this.myChangeHandler} />
                   <p>{this.state.errorm2}</p>
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">Email address</label>
                   <input type="email" name="email" id="form4Example2" className="form-control" onChange={this.myChangeHandler} />
                   <p>{this.state.errorm3}</p>
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" for="form4Example4">Mobile Number</label>
                   <input type="tel" name="mob" id="form4Example4" className="form-control" onChange={this.myChangeHandler} />
                   <p>{this.state.errorm1}</p>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form4Example5">Designation</label>
                   <input type="text" name="des" id="form4Example5" className="form-control" />
                   
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form4Example6">Location</label>
                   <input type="text" name="loc" id="form4Example6" className="form-control" />
                   
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form4Example3">Remark</label>
                   <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                   
                </div>

                <br></br>
                <input  className="btn btn-primary btn-block mb-4" value="SUBMIT" onClick={this.submitEmail} style={{width:"400px"}}/>
               <br></br>
            </form>
            </div>
            <div style={{textAlign:"center",float:'left',margin:"20px"}}>
               <h3 >Address</h3>
               <p>2nd, 3rd, 4th & 5th floor, IT-6 building, Qubix </p>
               <p>Business Park Private Limited Special Economic</p>
               <p>Zone, Plot No 2, Blue Ridge Township, Rajiv</p>
               <p>Gandhi Infotech Park, Phase 1, Hinjewadi, Pune, </p>
               <p>Maharashtra 411057</p>
               <h3>Email</h3>
               <p>abc@gmail.com</p>
               <h3>Contact Number</h3>
               <p>123456</p>
            </div>
            <div className="child2" style={{float:"left",display:'inline-block'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121035.86684761179!2d73.7764778066407!3d18.557312683860314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe5b036291d%3A0xcb8abc91bdca4c48!2sLTI!5e0!3m2!1sen!2sin!4v1609492504579!5m2!1sen!2sin" width="370" height="450" frameborder="0" style={{border:"0px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </div>
                
            </div>
        )
    }
}

export default ContactUs
