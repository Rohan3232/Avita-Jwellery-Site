

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    logger:true,
    debug:true,
    secureConnection:false,
    auth: {
      user: 'rohanardhapure83@gmail.com',
      pass: 'baft vzvu zrar xhnk'
    },
    tls:{
       rejectUnauthorized:true
    }
  });
  module.exports=transporter