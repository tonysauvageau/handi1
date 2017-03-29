const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const passport = require('passport');

const isAuthenticated = (req, res, next) => {
  if (req.user)
    next();
   else
     return res.json({ })
}


router.get('/', (req, res) => {
  Job.find( (err, jobs) => {
    res.json(jobs);
  });
});

router.post('/', (req, res) => {
  const { title, category, description, startDate, endDate, location, budget, user, active} = req.body;

  new Job({
    title,
    category,
    description,
    startDate,
    endDate,
    location,
    budget,
    active,
    user
  }).save( (err, job) => {
    console.log(err);
    res.json(job)
  });

});

router.get('/:id', (req, res) => {
  Job.findById(req.params.id, (err, job) => {
   res.json(job);
  });
});

router.put('/:id', ( req, res ) => {
  let { job } = req.body;
  Job.findByIdAndUpdate(
    req.params.id,
    { $set: { job }},
    { new: true },
    (err, job) => {
      res.json(job);
    });
});


module.exports = router;
