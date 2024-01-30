const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/user')
//middleware
router.use(
    cors()
)
router.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://jwellerybackend.onrender.com/');
})
router.get('/register', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://jwellerybackend.onrender.com/');
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
            userid, password, cart, total, totalQuantity, totalDiscount
        })
        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
})
router.get('/login', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://jwellerybackend.onrender.com/');
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
router.get('/updatecart', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://jwellerybackend.onrender.com/');
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
router.get('/resetpass', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://jwellerybackend.onrender.com/');
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

module.exports = router;