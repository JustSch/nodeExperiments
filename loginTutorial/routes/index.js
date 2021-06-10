const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const { ensureAuthenticatedHome } = require('../config/authhome');

router.get('/',ensureAuthenticatedHome,(req,res) =>{
})

router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard' , {
        name: req.user.name
    }));

module.exports = router;
