const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Mukeshismynam$e"

// Create a User using: POST "api/auth/createuser". Doesn't required login.
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({min: 5}),
], async (req, res)=>{
  // if the there are errors, return Bad requeest and errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }  
      // Check whether the user email exists already or not
      try {
        let user = await User.findOne({email: req.body.email});
        if(user){
          return res.status(400).json({errore: "Sorry a user with this email already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create new user 
        user = await User.create({
          name: req.body.name,
          password: secPass,
          email: req.body.email,   
        })
      //   .then(user => res.json(user)) 
      //   .catch(err=> {console.log(err)
      // res.json({error: 'Please enter a unique value of email', message: err.message})})
        const data = {
          user:{
            id: user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData);

        // res.json(user)
        res.json({authtoken})

      } catch (error){
        console.error(error.message);
        res.status(500).send("Some errore occured!")
      }       
})   
 
module.exports = router   