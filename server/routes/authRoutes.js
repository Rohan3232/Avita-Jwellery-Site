const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/user')
const transporter=require('../server')
//middleware
router.use(
    cors({
    credentials:true,
    origin:'https://jwellerysite.onrender.com'
}
)
)
router.get('/', (req, res) => {
    res.getHeaders
    res.json('test is working');
})
router.post('/register', async (req, res) => {
    try {
        const { userid, password, cart, total, totalQuantity, totalDiscount } = req.body;
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        }
        const exist = await User.findOne({ userid })
        if (exist) {
            return res.json({
                error: 'Mobile Number already exist'
            })
        }
        const user = await User.create({
            userid, password, cart, total, totalQuantity, totalDiscount,tryoutcart
        })
        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})
router.post('/login', async (req, res) => {
    try {
        const { userid, password } = req.body;
        const user = await User.findOne({ userid })
        if (!user) {
            return res.json({
                error: 'No User Found'
            })
        }
        const password1 = await User.findOne({ userid, password });
        if (password1 == null) {
            return res.json({
                error: 'Password Incorrect'
            })
        }
        return res.json(password1)
    }
    catch (error) {
        console.log(error)
    }
})
router.post('/updatecart', async (req, res) => {
    try {
        const { userid, cart, total, totalQuantity, totalDiscount } = req.body;
        const exist = await User.findOne({ userid })
        if (!exist) {
            return res.json({
                error: 'No User Found'
            })
        }
        const user = await User.updateOne({
            userid: userid
        }, {
            $set: {
                cart: cart,
                total: total, totalQuantity: totalQuantity, totalDiscount: totalDiscount
            }
        })
        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/updatetryoutcart', async (req, res) => {
    try {
        const { userid,tryoutcart } = req.body;
        const exist = await User.findOne({ userid })
        if (!exist) {
            return res.json({
                error: 'No User Found'
            })
        }
        const user = await User.updateOne({
            userid: userid
        }, {
            $set: {
                tryoutcart: tryoutcart
            }
        })
        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})
router.post('/resetpass', async (req, res) => {
    try {
        const { userid, password, oldpassword } = req.body;
        const exist = await User.findOne({ userid, oldpassword })
        if (!exist) {
            return res.json({
                error: 'No User Found'
            })
        }
        const user = await User.updateOne({
            userid: userid
        }, {
            $set: { password: password }
        })
        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})
router.post('/send', async (req, res) => {
    try{
    console.log(req.body.email)
    var mailOptions = {
     from: 'rohanardhapure83@gmail.com',
     to: req.body.email,
     subject: 'Appointment Booking Details',
     html: '<h1>Welcome</h1><h3>That was easy!</h3>'
   };
   
   await transporter.sendMail(mailOptions, function(err, data){
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
}catch(err)
{
    console.log(err)
}
 });

module.exports = router;