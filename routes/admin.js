const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin page' });
});

module.exports = router;
