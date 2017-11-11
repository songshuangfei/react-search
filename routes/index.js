var express = require('express');
var router = express.Router();

var data1= require('../data/good1');
var data2= require('../data/good2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  if(req.query.kw=='沙发'){
    res.json(data2);
  }

  if(req.query.kw=='床'){
    res.json(data1);
  }
  //key:

});

router.get('/json', function(req, res, next) {
  res.json({
    name:"song"
  });
});

module.exports = router;
