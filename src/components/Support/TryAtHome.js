import axios from "axios";
import React, { Component } from 'react'
import './TryAtHome.css'
export class TryAtHome extends Component {
 constructor(props)
 {
        super(props);
        this.state={
            contact:'',
            email:'',
            errorm1:'',
            errorm2:'',
            errorm3:'',
            Buttontxt:'SCHEDULE',
            message:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
 }
   
    handleChange=(e) =>{
        //this.setState({[e.target.name]: e.target.value});
        let nam = e.target.name;
      let val = e.target.value;
      let err1 = '';
      let err3 = '';
      
      
      if (nam === "contact") 
      {
          if (!val.match(/^\d{10}$/)) 
          {
          err1 = <strong style={{color:"red"}}>Mobile Number Must Be Of 10 Digits</strong>;
          }
          else if (val.match(/^[a-zA-Z]/)) 
          {
          err1 = <strong style={{color:"red"}}>Mobile Number Must contain numbers only</strong>;
          }
          else if(!val.match(/^[a-zA-Z]/) &&val.match(/^\d{10}$/))
          {
              this.setState({contact:val});
          }
      }
      
      if (nam === "email") 
      { 
          if (!val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) 
          {
          err3 = <strong style={{color:"red"}}>Email must follow characters@characters.domain order</strong>;
          }
          else if(val.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/))
          {
              this.setState({email:val})
          }
      }

    this.setState({errorm1:err1});  
    this.setState({errorm3:err3});
    this.setState({[nam]:val});
        
    }
   handleClick=(e)=>{
    var data={
        contact:this.state.contact,
        email:this.state.email
    }
if(this.state.errorm1!=''||this.state.errorm3!=""||data.contact===""||data.email==="")
{
    alert("please enter valid data");
}
else{
    axios.post('http://localhost:3001/tryathome',data)
    .then(function(response) {
        alert('your response recorded Successfully!!!');
    })
    .catch(function (error) {
        console.log(error)
    });
}
   }

    render() {
        return (
            <div className="TryAtHome">
                  <div  className="container" >
                <form  method="post" className="form1 pull-right validate">
                <h3 className="title">SCHEDULE YOUR FREE TRIAL</h3> 
               
                <div className="form-content"> 
                <div className="form-group row ">
                 <div className="col-xs-12">              
                <input type="text" className="form-control"  placeholder="Mobile Number"  name="contact"value={this.state.contact} onChange={ this.handleChange } />
                <p>{this.state.errorm1}</p>
                    </div>
                     </div>           

                <div className="form-group row">
                <div className="col-xs-12">
                <input type="text" placeholder="Email Address" className="form-control" name="email" value={this.state.email} onChange={ this.handleChange } />
                 <p>{this.state.errorm3}</p>
                 </div> 
                 </div>
                
              <input className="btn btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick}></input>
                </div>
                
                <h4>For help, call us at 1234567891 </h4>
                </form>

                </div>
                <div className="section ">
                <div className="container"> 
                <h2 className="title-new title-new-1 text-center">How it Works?</h2>
                <div >
                     <ul className="list-inline"> 
                     <li className="col-xs-4 text-center"> 
                     
                    <h3 className="title-new ">Schedule</h3> 
                    <div className="desc"> 
                    <p>Select your convenient date, time &amp; place <span className="small">(Monday to Sunday, Any time, Home/Office)</span>
                    </p> </div> </li> 
                    <li className="col-xs-4 text-center"> 
                    <h3 className="title-new ">Add Designs</h3>
                     <div className="desc"> <p>Choose designs you want to try <span className="small">(Try as many as you like)</span>
                     </p> </div> </li> 
                     <li className="col-xs-4 text-center"> 
                     <h3 className="title-new ">Try</h3>
                      <div className="desc"> <p>Our Jewellery consultant will bring designs to you <span className="small">(Buy only if you like)</span>
                      </p> </div> </li> </ul>
                     
                       </div>
                       </div>
                       </div>
            </div>
        )
    }
}

export default TryAtHome
                