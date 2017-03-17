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
  User.find( (err, users) => {
    res.json(users);
  });
});

router.post('/', (req, res) => {
  const { title, category, description, startDate, endDate, location, budget, active} = req.body;
  
  new Job({
    title,
    category,
    description,
    startDate,
    endDate,
    location,
    budget,
    active
  }).save( (err, job) => {
    console.log(err);
    res.json(job)
  });

});

// router.get('/:id', (req, res) => {
//   Song.findById(req.params.id, (err, song) => {
//    res.json(song);
//   });
// });


// router.post('/', (req, res) => {
//   const { title, artist, lyrics } = req.body;
//   new Song({
//     title,
//     artist,
//     lyrics
//   }).save( (err,song) => {
//     res.json(song)
//   });
// });

// router.delete('/:id', (req, res) => {
//   Song.findById(req.params.id, (err, song) => {
//     song.remove( (err, song) => {
//       res.status('200');
//     });
//   });
// });


module.exports = router;
