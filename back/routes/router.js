const express = require('express');
// Initialize app
const router = express.Router();
// Load models
const User = require('../models/careers');


// ADD user
router.post('/contact', function (req, res) {

    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.job = req.body.job;
    user.company = req.body.company;
    user.age = req.body.age;
    user.city = req.body.city;

    user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json({msg: "success"})
        }
    });
});

module.exports = router;