var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

/* GET home page. */
router.post('/contact', function(req, res, next) {
  res.send('from contact page ');
});

module.exports = router;
  