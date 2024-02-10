const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/user')
const transporter = require('../models/mail');

router.use(
    cors({
        credentials: true,
        origin: 'https://jwellerysite.onrender.com'
    }
    )
)
router.get('/', (req, res) => {
    res.getHeaders
    res.json('test is working');
})
router.post('/register', async (req, res) => {
    try {
        const { userid, password, cart, total, totalQuantity, totalDiscount,tryoutcart,email,address } = req.body;
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
            userid, password, cart, total, totalQuantity, totalDiscount, tryoutcart,email,address
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
        if (password1 === null) {
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
        const { userid, tryoutcart, email } = req.body;
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
                tryoutcart: tryoutcart,
                email: email,
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
    const attachments = req.body.attachments.map((file) => {
        return { name: file.name, filename: file.filename, path: file.path, cid: file.filename };
    });
    var mailOptions = {
        from: 'rohanardhapure83@gmail.com',
        to: req.body.email,
        subject: 'Appointment Booking Details',
        html: '<h1>Booked appointment for '+req.body.dob+'!</h3><h4>Details:</h4><p><b>Address</b>:'+req.body.address+'</p><h4>Below are Requested Jwelleries:</h4>' + attachments.map((file, index) => {
            return ('<div style="display:flex"><span style="margin: auto 10px;">' + (index + 1) + '. </span><img style="width:150px;height:150px" src="cid:' + file.cid + '" alt="' + file.filename + '"/><h6 style="margin: auto 40px;">' + file.name + '</h6>');
        }) +'</div><p>Thank you for choosing us, and we appreciate the opportunity to serve you.</p>',
        attachments: attachments
    };
    try {
        await transporter.sendMail(mailOptions, function (err, data) {
            return res.json({
                status: 'success'
            })
        });
    } catch (err) {
        console.log(err)
    }
});


router.post('/sendContact', async (req, res) => {
    var mailOptions = {
        from: 'rohanardhapure83@gmail.com',
        to: req.body.email,
        subject: 'Feedback recorded!',
        html: "<h4>Hi "+req.body.nm+"</h4><h4>Thank you for contacting us. You're helping us make better! We couldn't be more grateful for your feedback. Your opinion matters, is hugely appreciated, and we'll take that into consideration to make our offerings better.</h4><h4>Thanks & Regards</br>,Avita Jwellery</h4>",
    };
    var mailOptions1 = {
        from: 'rohanardhapure83@gmail.com',
        to: 'rohanardhapure83@gmail.com',
        subject: 'Feedback Recieved',
        html: "<p>"+req.body.remarks+"</p>",
    };
    try {
        await transporter.sendMail(mailOptions, function (err, data) {
             transporter.sendMail(mailOptions1, function (err, data) {
                return res.json({
                    status: 'success'
                })
            });
            return res.json({
                status: 'success'
            })
        });
       
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;