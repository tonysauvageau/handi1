const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let remember = req.user ? 'true' : 'false'
  res.render('index', { title: 'Handi App', remember });
});

module.exports = router;
