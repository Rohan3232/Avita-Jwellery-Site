var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'justvarad@gmail.com',
    pass: 'varad1999'
  }
});

router.post('/send', (req, res, next) => {

     var mailOptions = {
      from: 'justvarad@gmail.com',
      to: req.body.email,
      subject: 'Sending Email using Node.js',
      html: '<h1>Welcome</h1><h3>That was easy!</h3>'
    };
    
    transporter.sendMail(mailOptions, function(err, data){
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
       
      
    });
  });
