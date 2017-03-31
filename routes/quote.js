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
  const {estimate, quote, jobid, user, message } = req.body;
  console.log(req.body)

  new Quote({
    estimate,
    quote,
    jobid,
    user,
    message
  }).save( (err, quote) => {
    if (err) {
      console.log(err);
    } else {
      res.json(quote)
    }
  });

});

module.exports = router;
