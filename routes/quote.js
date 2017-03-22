const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');
const passport = require('passport');

const isAuthenticated = (req, res, next) => {
  if (req.user)
    next();
   else
     return res.json({ })
}


router.get('/', (req, res) => {
  Quote.find( (err, quote) => {
    res.json(quote);
  });
});

router.post('/', (req, res) => {
  const {estimate, quote, jobid, userid } = req.body;
  
  
  new Quote({
    estimate,
    quote,
    jobid,
    userid
  }).save( (err, quote) => {
    console.log(err);
    res.json(quote)
  });

});

module.exports = router;