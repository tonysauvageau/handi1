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
  let { title, description, startDate, endDate, location, budget } = req.body;
  Job.findByIdAndUpdate(
    req.params.id,
    { $set: { title, description, startDate, endDate, location, budget  }},
    { new: true },
    (err, job) => {
      res.json(job);
    });
});

router.delete('/:id', (req, res) => {
  let jobId = req.params.id;
  Job.findById(jobId, (err, job) => {
    job.remove();
    Quote.find({ jobId }, (err, quotes) => {
      quotes.forEach( quote => { 
        quote.remove() 
      } );
    });
    res.status(200).send({success: true});
  });
});


module.exports = router;
