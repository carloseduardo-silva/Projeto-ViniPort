var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proposal', function(req, res, next) {
  res.render('proposal', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/institucional', function(req, res, next) {
  res.render('institucional', { title: 'Express' });
});

module.exports = router;
